package Ecomerceplatform;
public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Notebook", "Stationery"),
            new Product(105, "T-Shirt", "Clothing")
        };

        // Linear Search Test
        Product result1 = SearchService.linearSearch(products, "Smartphone");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Product not found"));

        // Binary Search Test
        Product result2 = SearchService.binarySearch(products, "Smartphone");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Product not found"));
    }
}
