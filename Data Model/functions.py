import math
import operator

'''
Accepts a list of products and normalizes them using the Euclidean norm method.

products - list of list of products where the location of a 1 or 0 indicates if that attribute is present.
'''
def normalizeProducts(products):
    normalized_products = []

    for product in products:
        total_attributes = sum(map(lambda x: x * x, product))  # Sum of the squares

        normalized_products.append([attribute / math.sqrt(total_attributes) for attribute in product])

    return normalized_products


'''
LOGARITHMIC VERSION

Accepts a list of products and normalizes them using the Euclidean norm method.

products - list of list of products where the location of a 1 or 0 indicates if that attribute is present.
'''
def normalizeProducts_LOG(products):
    normalized_products = []

    for product in products:

        adjusted_product = []

        for attribute in product:
            if attribute == 0:
                adjusted_product.append(0)
            else:
                adjusted_product.append(1 + math.log10(attribute))

        print(adjusted_product)

        total_attributes = sum(map(lambda x: x * x, adjusted_product))  # Sum of the squares

        normalized_products.append([attribute / math.sqrt(total_attributes) for attribute in adjusted_product])

    return normalized_products


'''
Accepts two vectors and returns the sum of their products.
'''
def sumproduct(vec1, vec2):
    return sum(map(operator.mul, vec1, vec2))


'''
BASED ON TYPE OF PRODUCT i.e. Saving, Loan, Investment

Accepts a list of user preferences and calculates its productsum with a list of normalized products. Ranks
the results to determine the most suitable products for the user.

user - list of user preferences where the location of a: 
       1 indicates the user prioritizes that attribute of a product,
       0 indicates the user is neutral towards that attribute of a product,
       -1 indicates the user does not want that attribute of a product

normalized_products - list of list of products' Euclidean norm for each attribute
'''
def matchUser_product(user, normalized_products):
    attribute_columns = []  # Holds the normalized values for an attribute for each product

    for attribute_index in range(len(normalized_products[0])):
        attribute_columns.append([normalized_product[attribute_index] for normalized_product in normalized_products])

    # Holds the sumproduct of user preferences and attribute column. Should tell us which attributes are most important to the user.
    user_profile = [sumproduct(user, attribute_column) for attribute_column in attribute_columns]

    # Holds the predicted sumproduct values for products to determine what a user would like
    predicted_user_profile = []

    for row in normalized_products:
        predicted_user_profile.append(sumproduct(user_profile, row))

    print(user_profile)
    print(predicted_user_profile)
    print()


# Print statements just for debugging
if __name__ == "__main__":
    products = [[1, 0, 0, 1, 1],
                [1, 0, 0, 1, 1],
                [0, 1, 1, 1, 1],
                [0, 1, 1, 1, 1],
                [1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1]]

    user1 = [1, 1, -1, -1]
    user2 = [0, 0, 1, 1, -1, -1]
    user3 = [0, 0, 1, 1, 1, 1]

    normalized_products = normalizeProducts(products)

    print('Normalized Product Vectors -- Normalizing means that the vector lengths are equal to 1')

    for normalized_product in normalized_products:
        print(normalized_product)

    print()

    print('Matching user to a product based on their indicated or inferred product-type preference')

    print('USER 1')
    matchUser_product(user1, normalized_products)

    print('USER 2')
    matchUser_product(user2, normalized_products)

    print('USER 3')
    matchUser_product(user3, normalized_products)

