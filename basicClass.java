public class BasicClass {
    // Private - Accessible only within the same class.
    // Protected - Accessible within the same package and by subclasses.
    // Public - Accessible from any other class.
    // Static - Belongs to the class, not instances. Shared across all instances.
    // Final - Cannot be changed once initialized. Used for constants.
    public int publicField;
    protected int protectedField;
    private int privateField;
    public static final int STATIC_FIELD = 41;
    public String[] stringArray;
    public int[] intArray;
    //Can use an Array of Object type to accept any type however, you must Cast the object upon retrieval.
    Object[] mixedArray = new Object[3];

    public BasicClass() {
    }

    public BasicClass(int publicField1, int protectedField, int privateField) {
        publicField = publicField1;
        this.protectedField = protectedField;
        this.privateField = privateField;
    }

    public int getPublicField() {
        return publicField;
    }

    public void setPublicField(int publicField) {
        this.publicField = publicField;
    }

    public int getProtectedField() {
        return protectedField;
    }

    public void setProtectedField(int protectedField) {
        this.protectedField = protectedField;
    }

    public int getPrivateField() {
        return privateField;
    }

    public void setPrivateField(int privateField) {
        this.privateField = privateField;
    }

    @Override
    public String toString() {
        return "Public: " + publicField + ", Protected: " + protectedField;
    }

    protected void updateProtected(int newValue, boolean condition) {
        if (condition) {
            this.protectedField = newValue;
        }
    }

    private void privateMethod(int choice) {
        if (choice == 1) {
            System.out.println(publicField);
        } else if (choice == 2) {
            System.out.println(protectedField);
        }
    }

    public void printNumbers(int number) {
        if (number % 2 == 0) {
            for (int i = 2; i <= 20; i += 2) {
                System.out.println("forloop:" + i);
            }
            int i = 2;
            while (i <= 20) {
                System.out.println("whileloop:" + i);
                i += 2;
            }
        } else {
            for (int i = 1; i < 20; i += 2) {
                System.out.println("forloop:" + i);
            }
            int i = 1;
            while (i < 20) {
                System.out.println("whileloop:" + i);
                i += 2;
            }
        }
    }

        /**
         * Compares two objects for equality in Java.
    
         * Functionality:
         * - Uses the .equals() method to compare the two objects.
         * - Prints a message indicating whether the objects are equal or not.
    
         * Limitations:
         * - The .equals() method must be properly overridden in the object's class to ensure correct behavior.
         */
    public void compareObjects(Object obj1, Object obj2) {
        if (obj1.equals(obj2)) {
            System.out.println("The objects are equal.");
        } else {
            System.out.println("The objects are not equal.");
        }
    }

     /**
     * Identifies the type of the given object and prints a message based on its type.
     * 
     * Functionality:
     * - Uses instanceof to check if the object is a String, Integer, or BasicClass.
     * - Prints a corresponding message for each recognized type.
     * - Prints "Unknown type" for any other types.

     * Limitations:
     * - Java's switch statement does not support type checking directly.
     * - Requires explicit instanceof checks for each type.
     * - The method only recognizes a limited set of types.
     */

    public void identifyType(Object obj) {
        if (obj instanceof String) {
            System.out.println("This Object is of the Class String");
        } else if (obj instanceof Integer) {
            System.out.println("This Object belongs to the integer Class");
        } else if (obj instanceof BasicClass) {
            System.out.println("This Object is of the Class BasicClass");
        } else {
            System.out.println("Unknown type");
        }
    }


    //using an array we wouldnt really need a method to access and modify its elements, please see java basicClassrun.java
    // Method to add an item to the end of a list
    public <T> void addItem(List<T> list, T item) {
        list.add(item);
    }

    // Method to get an item at a specified index from a list
    public <T> T getItemAtIndex(List<T> list, int index) {
        if (index >= 0 && index < list.size()) {
            return list.get(index);
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
    }



    // Defines where the program starts.
    public static void main( String[] args ) {
        System.out.println("Hello world");
    }

}