class BasicClass:
    # Public - Accessible from anywhere. No leading underscore.
    # Protected - Conventionally indicated by a single leading underscore. Intended for internal use.
    # Private - Conventionally indicated by a double leading underscore. Name mangling is used to prevent access.
    # Static - Class-level variable shared across all instances. Defined directly in the class.
    # Python does not have a direct equivalent to final. Use naming conventions or properties to mimic immutability.

    #static 
    static_field = 41
    #Constructor for Python Classes
    def __init__(self, public_field=None, protected_field=None, private_field=None):
        self.public_field = public_field
        self._protected_field = protected_field
        self.__private_field = private_field
        self.string_list = ["example1", "example2"]
        self.int_list = [1, 2, 3]
        self.init_mixed_list = [1,2,"three","Four"]
    # Getters and Setters
    def get_public_field(self):
        return self.public_field

    def set_public_field(self, value):
        self.public_field = value

    def get_protected_field(self):
        return self._protected_field

    def set_protected_field(self, value):
        self._protected_field = value

    def get_private_field(self):
        return self.__private_field

    def set_private_field(self, value):
        self.__private_field = value
    #Function to return a f string of the public and protected fields
    def __str__(self):
        return f"Public: {self.public_field}, Protected: {self._protected_field}"

    def _update_protected(self, new_value, condition):
        if condition:
            self._protected_field = new_value

    def __private_method(self, choice):
        if choice == 1:
            print(self.public_field)
        elif choice == 2:
            print(self._protected_field)
    #function that shows a basic if statement,While and For loop
    def print_numbers(self, number):
        if number % 2 == 0:
            for i in range(2, 21, 2):
                print(f"forloop:{i}")
            i = 2
            while i <= 20:
                print(f"whileloop:{i}")
                i += 2
        else:
            for i in range(1, 20, 2):
                print(f"forloop:{i}")
            i = 1
            while i < 20:
                print(f"whileloop:{i}")
                i += 2

    def compare_objects(obj1, obj2):
        if obj1 == obj2:
            print("The objects are equal.")
        else:
            print("The objects are not equal.")

    
        """
        Performs a deep equality check between two objects by comparing their fields.

        Functionality:
        - Recursively compares the fields of each object.
        - Handles basic data types, lists, dictionaries, and objects with accessible attributes.

        Limitations:
        - Does not handle private fields.
        - Assumes objects are simple and do not contain complex nested structures.
        """
    # Static method for deep equality check
    @staticmethod
    def deep_equal(obj1, obj2):
        # Check for identity
        if obj1 is obj2:
            return True

        # Check for type equality
        if type(obj1) != type(obj2):
            return False

        # Check for basic data types
        if isinstance(obj1, (int, float, str, bool)):
            return obj1 == obj2

        # Check for lists
        if isinstance(obj1, list) and isinstance(obj2, list):
            if len(obj1) != len(obj2):
                return False
            return all(BasicClass.deep_equal(x, y) for x, y in zip(obj1, obj2))

        # Check for dictionaries
        if isinstance(obj1, dict) and isinstance(obj2, dict):
            if obj1.keys() != obj2.keys():
                return False
            return all(BasicClass.deep_equal(obj1[key], obj2[key]) for key in obj1)

        # Check for objects with accessible attributes
        if hasattr(obj1, '__dict__') and hasattr(obj2, '__dict__'):
            return BasicClass.deep_equal(vars(obj1), vars(obj2))

        # If none of the above, return False
        return False

    # Method to identify the type of a value
    def identify_type(self, value):
        if isinstance(value, str):
            print("This Variable is a primitive string")
        elif isinstance(value, int):
            print("This Variable is a primitive int")
        elif isinstance(value, BasicClass):
            print("This Object is of the Class BasicClass")
        else:
            print("Unknown type")


    """
    Identifies the type of the given value and prints a message based on its type.
    
    Functionality:
    - Checks if the value is a string, integer, or an instance of BasicClass.
    - Prints a corresponding message for each recognized type.
    - Prints "Unknown type" for any other types.

    Limitations:
    - Python does not have a switch statement, so we use if-elif-else.
    - Python treats all data types as objects, so there's no distinction between primitive and object types.
    - The function only recognizes a limited set of types.
    """
    def identify_type(value):
        if isinstance(value, str):
            print("This Variable is a primitive string")
        elif isinstance(value, int):
            print("This Variable is a primitive int")
        elif isinstance(value, BasicClass):
            print("This Object is of the Class BasicClass")
        else:
            print("Unknown type")

    # Method to add an item to the end of a list
    def add_item(self, lst, item):
        lst.append(item)

    # Method to get an item at a specified index from a list
    def get_item_at_index(self, lst, index):
        if 0 <= index < len(lst):
            return lst[index]
        else:
            raise IndexError("Index out of bounds")