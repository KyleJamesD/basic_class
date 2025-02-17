class BasicClass {
    // Public - Default access modifier. Accessible from anywhere.
    // Private - Accessible only within the class.
    // Protected - Accessible within the class and subclasses.
    // Static - Belongs to the class, not instances. Shared across all instances.
    // Readonly - Similar to final in Java. Cannot be changed after initialization.

    static staticField: number = 41;
    public publicField: number | null;
    protected protectedField: number | null;
    private privateField: number | null;
    public stringArray: string[];
    public intArray: number[];
    public mixedArray: any[] = ["String", 42, new BasicClass()];

    constructor(publicField: number | null = null, protectedField: number | null = null, privateField: number | null = null) {
        this.publicField = publicField;
        this.protectedField = protectedField;
        this.privateField = privateField;
        this.stringArray = ["example1", "example2"];
        this.intArray = [1, 2, 3];
    }

    getPublicField(): number | null {
        return this.publicField;
    }

    setPublicField(value: number): void {
        this.publicField = value;
    }

    getProtectedField(): number | null {
        return this.protectedField;
    }

    setProtectedField(value: number): void {
        this.protectedField = value;
    }

    getPrivateField(): number | null {
        return this.privateField;
    }

    setPrivateField(value: number): void {
        this.privateField = value;
    }

    toString(): string {
        return `Public: ${this.publicField}, Protected: ${this.protectedField}`;
    }

    protected updateProtected(newValue: number, condition: boolean): void {
        if (condition) {
            this.protectedField = newValue;
        }
    }

    private privateMethod(choice: number): void {
        if (choice === 1) {
            console.log(this.publicField);
        } else if (choice === 2) {
            console.log(this.protectedField);
        }
    }

    printNumbers(number: number): void {
        if (number % 2 === 0) {
            for (let i = 2; i <= 20; i += 2) {
                console.log(`forloop:${i}`);
            }
            let i = 2;
            while (i <= 20) {
                console.log(`whileloop:${i}`);
                i += 2;
            }
        } else {
            for (let i = 1; i < 20; i += 2) {
                console.log(`forloop:${i}`);
            }
            let i = 1;
            while (i < 20) {
                console.log(`whileloop:${i}`);
                i += 2;
            }
        }
    }

    /**
     * Compares two objects for equality in TypeScript.
    * Functionality:
    * - Uses the === operator for strict equality comparison.
    * - Prints a message indicating whether the objects are equal or not.

    * Limitations:
    * - The === operator checks for both value and type equality, which is suitable for primitive types.
    * - For objects, === checks for reference equality, not value equality.
    */
    compareObjects(obj1: any, obj2: any): void {
        if (obj1 === obj2) {
            console.log("The objects are equal.");
        } else {
            console.log("The objects are not equal.");
        }
    }

    /**
    * Performs a deep equality check between two objects by comparing their properties.

    * Functionality:
    * - Recursively compares the properties of each object.
    * - Handles arrays and nested objects.

    * Limitations:
    * - Does not handle private fields.
    * - Assumes objects are simple and do not contain complex nested structures.
    */
    deepEqual<T>(obj1: T, obj2: T): boolean {

        if (obj1 === obj2) return true;
    
        if (typeof obj1 !== 'object' || obj1 === null ||
            typeof obj2 !== 'object' || obj2 === null) {
            return false;
        }
    
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
    
        if (keys1.length !== keys2.length) return false;
    
        for (let key of keys1) {
            if (!keys2.includes(key) || !this.deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
    
        return true;
    }


     /**
     * Identifies the type of the given value and prints a message based on its type.
     * 
     * Functionality:
     * - Uses typeof to check for primitive types like string and number.
     * - Uses instanceof to check if the value is an instance of BasicClass.
     * - Prints a corresponding message for each recognized type.
     * - Prints "Unknown type" for any other types.

     * Limitations:
     * - TypeScript, like JavaScript, uses typeof and instanceof for type checking.
     * - TypeScript provides type safety but still relies on runtime checks for this method.
     * - The method only recognizes a limited set of types.
     */

    identifyType(value: any): void {
        switch (typeof value) {
            case 'string':
                console.log("This Variable is a primitive string");
                break;
            case 'number':
                console.log("This Variable is a primitive number");
                break;
            case 'object':
                if (value instanceof BasicClass) {
                    console.log("This Object is of the Class BasicClass");
                } else {
                    console.log("This Object is of an unknown class");
                }
                break;
            default:
                console.log("Unknown type");
        }
    }

    // Method to add an item to the end of an array
    addItem<T>(array: T[], item: T): void {
        array.push(item);
    }

    // Method to get an item at a specified index from an array
    getItemAtIndex<T>(array: T[], index: number): T {
        if (index >= 0 && index < array.length) {
            return array[index];
        } else {
            throw new RangeError("Index out of bounds");
        }
    }
}