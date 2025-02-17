class BasicClass {
    // Public - Accessible from anywhere. No special syntax needed.
    // Private - Indicated by a leading # symbol. Accessible only within the class.
    // Static - Belongs to the class, not instances. Shared across all instances.
    // JavaScript does not have protected or final. Use conventions or closures to mimic behavior.

    //Sum 41
    static staticField = 41;
    //Blink-182
    #privateField = 182;
    //Plus44
     static #classonlypriatefield = 44;

     mixedArray = ["String", 42, new BasicClass()];


    //Ths Private field is not working corectly at the moment and MUST be fixed!
    constructor(publicField = null, protectedField = null) {
        this.publicField = publicField;
        this._protectedField = protectedField;
        this.stringArray = ["example1", "example2"];
        this.intArray = [1, 2, 3];
    }

    get publicField() {
        return this._publicField;
    }

    set publicField(value) {
        this._publicField = value;
    }

    get protectedField() {
        return this._protectedField;
    }

    set protectedField(value) {
        this._protectedField = value;
    }

    get privateField() {
        return this.#privateField;
    }

    set privateField(value) {
        this.#privateField = value;
    }

    toString() {
        return `Public: ${this.publicField}, Protected: ${this._protectedField}`;
    }

    _updateProtected(newValue, condition) {
        if (condition) {
            this._protectedField = newValue;
        }
    }

    #privateMethod(choice) {
        if (choice === 1) {
            console.log(this.publicField);
        } else if (choice === 2) {
            console.log(this._protectedField);
        }
    }

    printNumbers(number) {
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
    * Compares two objects for equality in JavaScript.

    * Functionality:
    * - Uses the === operator for strict equality comparison.
    * - Prints a message indicating whether the objects are equal or not.

    * Limitations:
    * - The === operator checks for both value and type equality, which is suitable for primitive types.
    * - For objects, === checks for reference equality, not value equality.
    */

    compareObjects(obj1, obj2) {
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
    * - Does not handle private fields (using # syntax).
    * - Assumes objects are simple and do not contain complex nested structures.
    */
    deepEqual(obj1, obj2) {
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
     * - JavaScript does not have a switch statement for types, so typeof and instanceof are used.
     * - JavaScript distinguishes between primitive types and objects, but not as strictly as Java.
     * - The method only recognizes a limited set of types.
     */
    identifyType(value) {
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
    addItem(array, item) {
        array.push(item);
    }

    // Method to get an item at a specified index from an array
    getItemAtIndex(array, index) {
        if (index >= 0 && index < array.length) {
            return array[index];
        } else {
            throw new RangeError("Index out of bounds");
        }
    }
}