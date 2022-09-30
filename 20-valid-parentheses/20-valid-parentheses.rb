# @param {String} s
# @return {Boolean}
# valid parentheses = () , {} , [] , "{[]}"

def is_valid(s)
map = {
    "(" => ")",
    "{" => "}",
    "[" => "]"
}         
stack = []
s.each_char do |x|
    if !stack.last.nil? && map[stack.last] == x
        stack.pop
    else 
       stack << x
   end
end
stack.empty?
end

  