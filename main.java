import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;

public class ChatApp {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Are you a server or a client? (server/client)");
        String choice = scanner.nextLine().trim().toLowerCase();

        if (choice.equals("server")) {
            System.out.print("Enter the maximum number of clients: ");
            int maxClients = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            new ChatServer(6000, maxClients).start();
        } else if (choice.equals("client")) {
            System.out.print("Enter your name: ");
            String name = scanner.nextLine();
            System.out.print("Enter server IP address: ");
            String serverIp = scanner.nextLine();
            new ChatClient(name, serverIp, 6000).start();
        } else {
            System.out.println("Invalid choice.");
        }
    }
}

class ChatServer {
    private final int port;
    private final int maxClients;
    private final List<ClientHandler> clients = new ArrayList<>();
    private final ExecutorService threadPool;

    public ChatServer(int port, int maxClients) {
        this.port = port;
        this.maxClients = maxClients;
        this.threadPool = Executors.newFixedThreadPool(maxClients);
    }

    public void start() throws IOException {
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server started on port " + port);
            System.out.println("Waiting for clients...");

            while (true) {
                if (clients.size() < maxClients) {
                    Socket clientSocket = serverSocket.accept();
                    ClientHandler clientHandler = new ClientHandler(clientSocket, this);
                    synchronized (clients) {
                        clients.add(clientHandler);
                    }
                    threadPool.execute(clientHandler);
                    System.out.println("Client connected. Total clients: " + clients.size());
                } else {
                    System.out.println("Maximum client limit reached. Rejecting new connections.");
                }
            }
        }
    }

    public void broadcast(String message, ClientHandler sender) {
        synchronized (clients) {
            for (ClientHandler client : clients) {
                if (client != sender) {
                    client.sendMessage(message);
                }
            }
        }
    }

    public void removeClient(ClientHandler clientHandler) {
        synchronized (clients) {
            clients.remove(clientHandler);
            System.out.println("Client disconnected. Total clients: " + clients.size());
        }
    }
}

class ClientHandler implements Runnable {
    private final Socket socket;
    private final ChatServer server;
    private PrintWriter out;
    private String username;

    public ClientHandler(Socket socket, ChatServer server) {
        this.socket = socket;
        this.server = server;
    }

    @Override
    public void run() {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {

            this.out = out;
            out.println("Welcome to the chat server! Your username is: " + (username = "User" + socket.getPort()));
            server.broadcast(username + " has joined the chat.", this);

            String message;
            while ((message = in.readLine()) != null) {
                System.out.println(username + ": " + message);
                server.broadcast(username + ": " + message, this);
            }
        } catch (IOException e) {
            System.out.println("Error handling client: " + e.getMessage());
        } finally {
            server.removeClient(this);
            server.broadcast(username + " has left the chat.", this);
        }
    }

    public void sendMessage(String message) {
        if (out != null) {
            out.println(message);
        }
    }
}

class ChatClient {
    private final String name;
    private final String serverIp;
    private final int port;

    public ChatClient(String name, String serverIp, int port) {
        this.name = name;
        this.serverIp = serverIp;
        this.port = port;
    }

    public void start() {
        try (Socket socket = new Socket(serverIp, port);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader console = new BufferedReader(new InputStreamReader(System.in))) {

            System.out.println("Connected to the server.");
            new Thread(() -> {
                try {
                    String serverMessage;
                    while ((serverMessage = in.readLine()) != null) {
                        System.out.println(serverMessage);
                    }
                } catch (IOException e) {
                    System.out.println("Disconnected from the server.");
                }
            }).start();

            out.println(name);

            String userInput;
            while ((userInput = console.readLine()) != null) {
                out.println(userInput);
            }
        } catch (IOException e) {
            System.out.println("Error connecting to the server: " + e.getMessage());
        }
    }
}
