class User {
    String name;
    String email;

    User(String name) {
        this.name = name;
    }

    void sayHi() {
        System.out.println("Hi! I'm "+this.name);
    }

}

public class HelloWorld {
    public static void main (String[] args) {
        User tom = new User("tom");
        User bob = new User("bob");
        tom.sayHi();
        bob.sayHi();
    }
}
