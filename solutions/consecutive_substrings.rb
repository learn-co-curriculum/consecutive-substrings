def consecutive_substrings(string)
  subs = []

  string.split('').each_with_index do |char, idx|
    subs << char
    fragment = char

    string[idx + 1..-1].split('').each_with_index do |letter|
      fragment += letter
      subs << fragment
    end
  end

  subs
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print consecutive_substrings('a')

  # Don't forget to add your own!

  puts

  puts "Expecting: []"
  print consecutive_substrings('')

  puts

  puts "Expecting: ['a', 'ab', 'b']"
  print consecutive_substrings('ab')
end

# Please add your pseudocode to this file
# And a written explanation of your solution
