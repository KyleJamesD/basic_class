public class BasicClass {
    // Private - Accessible only within the same class.
    // Protected - Accessible within the same class and by derived classes.
    // Public - Accessible from any other class.
    // Static - Belongs to the class, not instances. Shared across all instances.
    // Readonly - Similar to final in Java. Can only be assigned in the constructor or declaration.
    public int PublicField { get; set; }
    protected int ProtectedField { get; set; }
    private int PrivateField { get; set; }
    public static readonly int StaticField = 41;
    public string[] stringArray;
    public int[] intArray;
    //Can use an Array of Object type to accept any type however, you must Cast the object upon retrieval.
    object[] mixedArray = new object[3];
    public BasicClass() {
    }

    // Constructor For class
    public BasicClass(int publicField, int protectedField, int privateField) {
        PublicField = publicField;
        ProtectedField = protectedField;
        PrivateField = privateField;
    }

    //To String method prints the public and Protected field.
    public override string ToString() {
        return $"Public: {PublicField}, Protected: {ProtectedField}";
    }

    //Update the Protected field if the boolean argument is true.
    protected void UpdateProtected(int newValue, bool condition) {
        if (condition) {
            ProtectedField = newValue;
        }
    }

    //Private Method only usable by the class - Prints the public or protected field depending on the Argument 1 or 2.
    private void PrivateMethod(int choice) {
        if (choice == 1) {
            Console.WriteLine(PublicField);
        } else if (choice == 2) {
            Console.WriteLine(ProtectedField);
        }
    }

    //Basic function that shows a for and while loop, prints odd or even numbers.
    public void PrintNumbers(int number) {
        if (number % 2 == 0) {
            for (int i = 2; i <= 20; i += 2) {
                Console.WriteLine("forloop:" + i);
            }
            int i = 2;
            while (i <= 20) {
                Console.WriteLine("whileloop:" + i);
                i += 2;
            }
        } else {
            for (int i = 1; i < 20; i += 2) {
                Console.WriteLine("forloop:" + i);
            }
            int i = 1;
            while (i < 20) {
                Console.WriteLine("whileloop:" + i);
                i += 2;
            }
        }
    }


    /**
    * Compares two objects for equality in C#.

    * Functionality:
    * - Uses the Equals method to compare the two objects.
    * - Prints a message indicating whether the objects are equal or not.

    * Limitations:
    * - The Equals method must be properly overridden in the object's class to ensure correct behavior.
    */
    public void CompareObjects(object obj1, object obj2) {
        if (obj1.Equals(obj2)) {
            Console.WriteLine("The objects are equal.");
        } else {
            Console.WriteLine("The objects are not equal.");
        }
    }

    /**
    * Identifies the type of the given object and prints a message based on its type.
    * 
    * Functionality:
    * - Uses pattern matching in a switch statement to check if the object is a string, int, or BasicClass.
    * - Prints a corresponding message for each recognized type.
    * - Prints "Unknown type" for any other types.

    * Limitations:
    * - C#'s switch statement supports pattern matching, which simplifies type checking.
    * - The method only recognizes a limited set of types.
    * - The method assumes all types are known at compile-time.
    */

    public void IdentifyType(object obj) {
        switch (obj) {
            case string s:
                Console.WriteLine("This Variable is a primitive string");
                break;
            case int i:
                Console.WriteLine("This Variable is a primitive int");
                break;
            case BasicClass bc:
                Console.WriteLine("This Object is of the Class BasicClass");
                break;
            default:
                Console.WriteLine("Unknown type");
                break;
        }
    }

    // Method to add an item to the end of a list
    public void AddItem<T>(List<T> list, T item) {
        list.Add(item);
    }

    // Method to get an item at a specified index from a list
    public T GetItemAtIndex<T>(List<T> list, int index) {
        if (index >= 0 && index < list.Count) {
            return list[index];
        } else {
            throw new ArgumentOutOfRangeException("Index out of range");
        }
    }
}