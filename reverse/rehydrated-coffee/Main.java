import java.util.Base64;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Password: ");
    String password = input.nextLine().trim();
    input.close();
    if (isValidPassword(password)) {
        System.out.print("\n\n");
        printRecipe(password);
    } else {
        System.out.println("Beep boop wrong password, destroying recipe...");
    }
  }

  public static boolean isValidPassword(String input) {
    String[] password = { "!!", "ix", "eF", "fe", "0f", "kC", "ic", "Qu"};
    if (input.length() != password.length * 2) return false;
    for (int i = 0; i < password.length; i++) {
      int index = input.length() - (i + 1) * 2;
      if (!input.substring(index, index + 2).equals(password[i])) return false;
    }
    return true;
  }

  public static void printRecipe(String password) {
    String recipe = "ARQbF0tyCkYiAA0/DQpAVTR/Y1JFY3IUAxJFMgEdAVIlBwYNDCZDEkYVCjJJF0cBMhoPBQ4mEB8JEEUuCA5EATQDDBFLIUIDEQABTFtWAXE+ABtDBC0QB0YRFycQWAlRIxAPBhkxUQQKAEUqABZERXECABcDY1IHDQwLIUkLSUQ0AUBpWG0QIgMNHCIbGVVEcRQdQ112ENYlRQo0SQxJRHEZBhQOMERGEgAINgwKQFUkBwxDBC0QHwkQF2YGDkRPW0FHQzwiWRJGEQwqBVhIVXYGSQIYY1QUH0UENUkITlIiHAsPDkkFSEYnFyMIEwFVORBJBxkqVQJGBgogDx1EATgbHQxLM1kDBQAWZggWRQE2BwAND2NZCBIKRSdJHkhPNFUZDBwnVRRsU0tmOhFHVXEBAREENlcORgRFKwwLSQEiHAwVDkkHSEY2ESkbHQFAOAdJFwIkWAofb28WCApVAWNPSTEOK0kCFAQRI2NyEA9xIBoGS3EQEgMEFjYGF09ScRoPQx8rVUYWChIiDAoBUTQHSQAeMxAJAEUNKR1YVkAlEBtpWW0QJwIBRSsAFEoNcRYbBgouHEYVEAInG1hOU3EGHgYON1UIAxcWZh0XAVUwBh0GYUlkNTQ8Hh9aK351GUQ6PFoQbywzNjEZWDZydWU7PTwoc3YgVVYYTA==";
    byte[] recipeBytes = Base64.getDecoder().decode(recipe);
    byte[] passwordBytes = password.getBytes();
    for (int i = 0; i < recipeBytes.length; i++) {
      recipeBytes[i] = (byte) (recipeBytes[i] ^ passwordBytes[i % passwordBytes.length]);
    }
    System.out.println(new String(recipeBytes));
  }
}
