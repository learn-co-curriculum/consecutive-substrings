def consecutive_substrings(string):
    substring_arr = []

    for i in range(len(string)):

        substring = string[i]

        substring_arr.append(substring)

        for j in range(i + 1, len(string)):

            substring += string[j]

            substring_arr.append(substring)

    return substring_arr

if __name__ == "__main__":
    # add your own tests in here
    print("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']")
    print(consecutive_substrings('abc'))

    print("")

    print("Expecting: ['a']")
    print(consecutive_substrings('a'))

    print("")

    print("Expecting: []")
    print(consecutive_substrings(''))

    print("")

    print("Expecting: ['a', 'ab', 'b']")
    print(consecutive_substrings('ab'))

# Please add your pseudocode to this file
#####################################################################################
 # initialize an empty array called subs
 # 
 # iterate over string:
 #    push character onto subs
 #    initialize fragment and store character in it
 # 
 #    iterate over string starting one index ahead:
 #      add letter to fragment
 #      push fragment onto subs
 # 
 # return subs
#####################################################################################

# And a written explanation of your solution
#####################################################################################
 # We can get all of the consecutive substrings by iterating over the string. We
 # push that character onto an list. We also store that character in a variable,
 # which we'll use to store the rest of the following characters. Next, we iterate
 # over the rest of the string. Each time we encounter a new character, we add it
 # onto the variable and then push the variable onto the list.
#####################################################################################