(() => {
  'use strict';

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  const lessons = [
    {chapter:'1 · Meet Python',title:'10 Fun Facts About Python',desc:'What Python is and what people build with it.',icon:'🐍',explain:'Python is a programming language designed to be readable. People use it for websites, data, automation, AI, games, robotics and many other things. You do not need to memorize everything before building. PYN teaches ideas when you need them.',code:'print("Hello PYN!")',question:'Which line correctly prints text in Python?',answers:['say("Hello")','print("Hello")','output = Hello'],correct:1,video:'Python in 3 minutes'},
    {chapter:'1 · Meet Python',title:'Get Ready',desc:'Python files, VS Code and running your first program.',icon:'🛠️',explain:'Python code is usually saved in a file ending in .py. An editor such as VS Code helps you write the file, while Python itself runs it.',code:'# hello.py\nprint("My first program!")',question:'What file ending is normally used for a Python file?',answers:['.py','.python','.code'],correct:0,video:'Set up Python + VS Code'},
    {chapter:'2 · Core Basics',title:'Syntax',desc:'The writing rules Python expects.',icon:'⌨️',explain:'Syntax means the rules for writing code. Parentheses, quotes, colons and indentation can all matter. When syntax is wrong, Python usually tells you where it got confused.',code:'print("Syntax matters")',question:'What does syntax mean?',answers:['The color of your code','The rules for writing code','A type of variable'],correct:1,video:'Python syntax visually explained'},
    {chapter:'2 · Core Basics',title:'Input and Output',desc:'Let a program talk and listen.',icon:'💬',explain:'print() sends information out to the screen. input() pauses and lets the person using the program type something in.',code:'name = input("Your name: ")\nprint(f"Hi {name}!")',question:'Which function asks a user to type something?',answers:['input()','print()','type()'],correct:0,video:'Input and output with a tiny game'},
    {chapter:'2 · Core Basics',title:'Comments',desc:'Leave notes for humans reading code.',icon:'📝',explain:'A comment starts with #. Python ignores it, but it helps you explain what the program is doing.',code:'# Ask for the player name\nname = input("Name: ")',question:'Which symbol begins a simple Python comment?',answers:['//','#','!'],correct:1,video:'Why programmers use comments'},
    {chapter:'2 · Core Basics',title:'Variables',desc:'Store information under useful names.',icon:'📦',explain:'A variable is a name that points to a value. Think of it like a labeled box. The value can later change.',code:'score = 10\nscore = score + 5\nprint(score)',question:'What is a variable mainly used for?',answers:['Storing a value under a name','Changing Python colors','Installing packages'],correct:0,video:'Variables with game scores'},
    {chapter:'2 · Core Basics',title:'Data Types',desc:'Text, whole numbers, decimals and True/False.',icon:'🧩',explain:'Values have types. str is text, int is a whole number, float is a decimal number and bool is True or False.',code:'name = "Mina"\nage = 13\nheight = 1.6\nonline = True',question:'Which value is a Boolean?',answers:['"True"','True','1.5'],correct:1,video:'Python data types in plain English'},
    {chapter:'2 · Core Basics',title:'Numbers',desc:'Integers, floats and calculations.',icon:'🔢',explain:'Integers are whole numbers such as 4. Floats include decimals such as 4.5. Python can add, subtract, multiply and divide them.',code:'coins = 20\nbonus = 5\nprint(coins + bonus)',question:'Which value is a float?',answers:['12','"12"','12.5'],correct:2,video:'Numbers and calculations'},
    {chapter:'2 · Core Basics',title:'Strings',desc:'Work with text.',icon:'🔤',explain:'A string is text inside quotes. You can join strings, inspect characters and use helpful methods.',code:'first = "Py"\nsecond = "thon"\nprint(first + second)',question:'Which one is a string?',answers:['25','"25"','True'],correct:1,video:'Strings without the confusion'},
    {chapter:'2 · Core Basics',title:'Casting',desc:'Convert one type into another.',icon:'🔄',explain:'Casting changes a value from one type to another. int("12") turns text into a whole number. str(12) turns a number into text.',code:'age_text = "12"\nage = int(age_text)\nprint(age + 1)',question:'What does int("50") produce?',answers:['The text "50"','The number 50','An error every time'],correct:1,video:'Casting with user input'},
    {chapter:'2 · Core Basics',title:'Booleans',desc:'Use True and False.',icon:'✅',explain:'A Boolean is either True or False. Apps use Booleans for states like online/offline, completed/not completed and enabled/disabled.',code:'lesson_done = True\nprint(lesson_done)',question:'How many possible Boolean values are there?',answers:['2','10','Unlimited'],correct:0,video:'Booleans with real app examples'},
    {chapter:'2 · Core Basics',title:'Operators',desc:'Calculate and compare values.',icon:'➕',explain:'Operators include arithmetic like + and *, comparisons like == and >, and logical operators such as and, or and not.',code:'xp = 120\nprint(xp >= 100)',question:'Which operator checks whether two values are equal?',answers:['=','==','+='],correct:1,video:'Operators explained visually'},
    {chapter:'3 · Collections',title:'Lists',desc:'Keep several items in order.',icon:'📚',explain:'A list stores many values. Python starts list positions at 0. Lists can grow, shrink and change.',code:'friends = ["Mina", "Jay", "Noah"]\nfriends.append("Ava")\nprint(friends[0])',question:'What is the index of the first list item?',answers:['0','1','- always 2'],correct:0,video:'Lists and indexes'},
    {chapter:'3 · Collections',title:'Tuples',desc:'Ordered values that usually stay fixed.',icon:'🧱',explain:'A tuple is similar to a list but cannot be changed in the same way. It is useful for values that should stay fixed.',code:'spawn_point = (10, 20)\nprint(spawn_point[0])',question:'Which brackets normally create a tuple?',answers:['()','[]','{}'],correct:0,video:'Tuple vs list'},
    {chapter:'3 · Collections',title:'Sets',desc:'Store unique values.',icon:'🎯',explain:'A set keeps unique values. If the same item is added twice, the set still keeps only one copy.',code:'skills = {"Python", "HTML", "Python"}\nprint(skills)',question:'What is special about sets?',answers:['They keep duplicate items forever','They keep unique items','They only store numbers'],correct:1,video:'Sets with a simple example'},
    {chapter:'3 · Collections',title:'Dictionaries',desc:'Store key-value information.',icon:'🗂️',explain:'A dictionary connects a key to a value. A profile can use keys such as username, xp and online.',code:'user = {"name":"Mina", "xp":120}\nprint(user["name"])',question:'A dictionary stores information mainly as…',answers:['Key-value pairs','Only numbers','Only loops'],correct:0,video:'Dictionaries as profiles'},
    {chapter:'4 · Decisions',title:'If, Elif and Else',desc:'Make decisions in your program.',icon:'🔀',explain:'if checks a condition. elif checks another possibility. else handles everything left over.',code:'score = 80\nif score >= 70:\n    print("Great job")\nelse:\n    print("Keep going")',question:'Which block runs when an if condition is False and there is no matching elif?',answers:['else','while','import'],correct:0,video:'If statements with a game'},
    {chapter:'4 · Decisions',title:'Match',desc:'Choose from several clear cases.',icon:'🧭',explain:'match compares one value with different cases. It can be convenient for menus and choices.',code:'choice = "play"\nmatch choice:\n    case "play": print("Starting")\n    case _: print("Unknown")',question:'Which keyword belongs inside a match statement?',answers:['case','loop','then'],correct:0,video:'Match-case basics'},
    {chapter:'5 · Loops',title:'While Loops',desc:'Repeat while a condition stays true.',icon:'🔁',explain:'A while loop repeats while its condition is True. Something should usually change so the loop can eventually stop.',code:'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1',question:'A while loop repeats while its condition is…',answers:['True','A string','Always False'],correct:0,video:'While loops without infinite loops'},
    {chapter:'5 · Loops',title:'For Loops',desc:'Repeat for each item.',icon:'♻️',explain:'A for loop is useful when you want to do something for each item in a list, string, range or other iterable.',code:'names = ["Mina", "Jay", "Noah"]\nfor name in names:\n    print(name)',question:'Which loop is especially convenient for going through a list?',answers:['for','try','import'],correct:0,video:'For loops with lists'},
    {chapter:'5 · Loops',title:'Range',desc:'Create number sequences for loops.',icon:'📏',explain:'range() produces a sequence of numbers. range(1, 5) gives 1, 2, 3 and 4. The end value is not included.',code:'for number in range(1, 5):\n    print(number)',question:'What is the last number produced by range(1, 5)?',answers:['4','5','6'],correct:0,video:'Understanding range()'},
    {chapter:'6 · Reusable Code',title:'Functions',desc:'Write code once and reuse it.',icon:'🧰',explain:'A function groups code under a name. Parameters provide information to the function and return can send a result back.',code:'def greet(name):\n    return f"Hello {name}!"\n\nprint(greet("Mina"))',question:'Which keyword creates a function?',answers:['def','function','make'],correct:0,video:'Functions step by step'},
    {chapter:'6 · Reusable Code',title:'Modules',desc:'Use code that already exists.',icon:'🧪',explain:'A module contains reusable code. import lets you bring a module into your program, such as random, math or datetime.',code:'import random\nprint(random.randint(1, 6))',question:'Which keyword loads a module?',answers:['import','open','module'],correct:0,video:'Modules and random'},
    {chapter:'6 · Reusable Code',title:'Dates',desc:'Work with dates and time.',icon:'📅',explain:'The datetime module provides tools for dates and times. Apps can use these for timestamps, streaks and activity information.',code:'from datetime import datetime\nprint(datetime.now())',question:'Which built-in module is commonly used for dates and times?',answers:['datetime','calendar_only','clockwork'],correct:0,video:'datetime for beginners'},
    {chapter:'6 · Reusable Code',title:'Math',desc:'Use extra mathematical tools.',icon:'📐',explain:'The math module contains square roots, constants and other math functions.',code:'import math\nprint(math.sqrt(81))',question:'What does math.sqrt(81) return?',answers:['9','81','162'],correct:0,video:'The math module'},
    {chapter:'7 · Real Programs',title:'JSON',desc:'Move structured data between programs.',icon:'🧾',explain:'JSON is a common text format for structured data. APIs often return JSON, and Python can turn it into dictionaries and lists.',code:'import json\ndata = \'{"name":"Mina","xp":100}\'\nuser = json.loads(data)\nprint(user["xp"])',question:'JSON is commonly used for…',answers:['Structured data','Drawing only','Changing screen brightness'],correct:0,video:'JSON with a pretend API'},
    {chapter:'7 · Real Programs',title:'Regex',desc:'Find patterns in text.',icon:'🔎',explain:'Regular expressions describe text patterns. They are powerful, so PYN introduces only the basics at first.',code:'import re\ntext = "Level 12"\nprint(re.findall(r"\\d+", text))',question:'Regex is mainly used to work with…',answers:['Text patterns','3D models','Computer batteries'],correct:0,video:'Regex without the scary bits'},
    {chapter:'7 · Real Programs',title:'PIP',desc:'Install extra Python packages.',icon:'📦',explain:'pip installs packages created by Python developers. A project can use these packages for extra abilities.',code:'pip install requests',question:'What does pip mainly do?',answers:['Installs Python packages','Runs every loop','Creates usernames'],correct:0,video:'What pip actually does'},
    {chapter:'7 · Real Programs',title:'Try and Except',desc:'Handle errors without crashing.',icon:'🛟',explain:'Code inside try may fail. except lets your program respond to that error instead of stopping suddenly.',code:'try:\n    age = int(input("Age: "))\nexcept ValueError:\n    print("Please enter a number")',question:'Which keyword handles an error after try?',answers:['except','error','catching'],correct:0,video:'Try/except with input'},
    {chapter:'7 · Real Programs',title:'String Formatting',desc:'Put values inside readable text.',icon:'✍️',explain:'f-strings let you place variables inside text using curly brackets.',code:'name = "Mina"\nxp = 90\nprint(f"{name} has {xp} XP")',question:'Which prefix creates an f-string?',answers:['f','s','@'],correct:0,video:'F-strings in one minute'},
    {chapter:'7 · Real Programs',title:'None',desc:'Represent “no value yet.”',icon:'◻️',explain:'None means no value is currently present. It is different from 0, False and an empty string.',code:'profile_picture = None\nprint(profile_picture)',question:'What does None usually represent?',answers:['No value','The number zero only','Always True'],correct:0,video:'None vs empty values'},
    {chapter:'7 · Real Programs',title:'Virtual Environments',desc:'Give each project its own package space.',icon:'🧳',explain:'A virtual environment separates one project\'s Python packages from another project. It helps keep projects organized.',code:'python -m venv .venv',question:'Why use a virtual environment?',answers:['To isolate project packages','To change your avatar','To create a loop'],correct:0,video:'Virtual environments simply explained'},
    {chapter:'8 · Debugging',title:'Errors and Debugging',desc:'Use error messages as clues.',icon:'🐞',explain:'Errors are not a sign that you cannot code. Read the error type and the line Python points to, then test one small fix at a time.',code:'name = "Mina"\nprint(name)',question:'What is a good first step after an error?',answers:['Read the error message','Delete the whole project','Guess randomly'],correct:0,video:'How to read Python errors'}
  ];

  const THEME_COLORS = ['#111111','#2f6fed','#7c3aed','#e11d48','#ea580c','#059669','#0891b2','#ca8a04'];
  const SKINS = ['#f8e3d5','#f3d2bf','#e8c2a5','#d9ab82','#bb845d','#996847','#6f4a34','#4c3126'];
  const HAIRS = ['#1d1715','#4a2f21','#7d5237','#d4a35f','#cf6794','#8160d9','#409b7f','#4a7ae0','#ca6b2b','#f2f2f2'];
  const SHIRTS = ['#f6a7c3','#8bb6ff','#ffbf69','#a68af5','#77cfad','#f6d365','#f3f4f6','#25262b','#6ad7ff','#ff83c1'];
  const PANTS = ['#2a2d30','#3d4b65','#6a4d37','#1d416d','#4f5055'];
  const EYES = ['#7b4d31','#df7b2e','#f2c14e','#87b95e','#57c7bf','#5b82f0','#9a7cff','#ef6fb6','#d84d4d'];
  const HATS = {none:'None', cap:'Coder Cap', crown:'Bug Hunter Crown', beanie:'Python Beanie', headset:'Code Headset', visor:'Pixel Visor'};
  const GLASSES = {none:'None', round:'Round Glasses', hacker:'Hacker Glasses', square:'Square Frames', shades:'Dark Shades'};
  const HAIR_STYLES = {short:'Short', long:'Long', wavy:'Wavy', pony:'Ponytail', puff:'Twin puffs', spikes:'Spiky'};
  const EYE_STYLES = {round:'Round', sparkle:'Sparkle', sleepy:'Sleepy', cat:'Cat-eye'};
  const OUTFITS = [
    {label:'Star skirt set', icon:'⭐', kind:'skirt', primary:'#f6a7c3', secondary:'#fff7fb', bottom:'#ffffff'},
    {label:'Blue hoodie fit', icon:'🧥', kind:'hoodie', primary:'#8bb6ff', secondary:'#dfeaff', bottom:'#5b6f95'},
    {label:'Sunny dress', icon:'👗', kind:'dress', primary:'#ffbf69', secondary:'#fff2d9', bottom:'#fff2d9'},
    {label:'Dream cardigan', icon:'🩷', kind:'cardigan', primary:'#a68af5', secondary:'#ffffff', bottom:'#ece8ff'},
    {label:'Mint overalls', icon:'🐸', kind:'overalls', primary:'#77cfad', secondary:'#effff8', bottom:'#5ea98d'},
    {label:'Golden sweater', icon:'🌟', kind:'sweater', primary:'#f6d365', secondary:'#fff6cf', bottom:'#7d6b34'},
    {label:'Soft white set', icon:'☁️', kind:'uniform', primary:'#f3f4f6', secondary:'#ffffff', bottom:'#cfd3da'},
    {label:'Midnight tech fit', icon:'🖤', kind:'hoodie', primary:'#25262b', secondary:'#454851', bottom:'#16171a'},
    {label:'Neo cyan jacket', icon:'💎', kind:'jacket', primary:'#6ad7ff', secondary:'#e1f9ff', bottom:'#409cc0'},
    {label:'Bunny pink hoodie', icon:'🐰', kind:'hoodie', primary:'#ff83c1', secondary:'#ffe6f2', bottom:'#c45e8d'},
    {label:'Denim street fit', icon:'👖', kind:'jacket', primary:'#7da4d8', secondary:'#eef4ff', bottom:'#4c6282'},
    {label:'Varsity coder', icon:'🏫', kind:'jacket', primary:'#c84f64', secondary:'#fff7f8', bottom:'#353b50'},
    {label:'Forest explorer', icon:'🌲', kind:'overalls', primary:'#7c9b68', secondary:'#edf5e7', bottom:'#516b48'},
    {label:'Cloud lounge set', icon:'☁️', kind:'sweater', primary:'#d9e7ff', secondary:'#ffffff', bottom:'#9eaec9'},
    {label:'Rose academy', icon:'🎀', kind:'uniform', primary:'#f3adc0', secondary:'#fffdfd', bottom:'#71495a'},
    {label:'Purple gamer hoodie', icon:'🎮', kind:'hoodie', primary:'#7757c7', secondary:'#dcd1ff', bottom:'#30285a'},
    {label:'Red plaid fit', icon:'❤️', kind:'uniform', primary:'#b94e55', secondary:'#fff7f7', bottom:'#5d3337'},
    {label:'Ocean tracksuit', icon:'🌊', kind:'sweater', primary:'#4da6d8', secondary:'#e9f7ff', bottom:'#285b75'},
    {label:'Cream cafe fit', icon:'🧸', kind:'cardigan', primary:'#d9b98b', secondary:'#fff9ef', bottom:'#876c4b'},
    {label:'Black cat fit', icon:'🐈‍⬛', kind:'hoodie', primary:'#31323a', secondary:'#60626e', bottom:'#17181c'},
    {label:'Peach picnic', icon:'🍑', kind:'dress', primary:'#f7aa8f', secondary:'#fff1e8', bottom:'#f7d1bd'},
    {label:'Green sporty fit', icon:'⚡', kind:'jacket', primary:'#5bbf7a', secondary:'#effff3', bottom:'#2f6e43'},
    {label:'Lavender layered set', icon:'💜', kind:'skirt', primary:'#b5a3e8', secondary:'#faf7ff', bottom:'#ede8ff'},
    {label:'Monochrome coder', icon:'⌨️', kind:'jacket', primary:'#4d5058', secondary:'#f1f2f4', bottom:'#202126'}
  ];
  const ACCESSORIES = {
    none:{label:'None',icon:'◯'}, bow:{label:'Big Bow',icon:'🎀'}, catears:{label:'Cat Ears',icon:'🐱'}, stars:{label:'Star Clips',icon:'✨'}, flower:{label:'Flower Clip',icon:'🌸'},
    scarf:{label:'Cozy Scarf',icon:'🧣'}, necklace:{label:'Star Necklace',icon:'⭐'}, backpack:{label:'Mini Backpack',icon:'🎒'}, plush:{label:'Shoulder Plush',icon:'🧸'}, headphones:{label:'Pastel Headphones',icon:'🎧'},
    mask:{label:'Cute Face Mask',icon:'😷'}, wings:{label:'Tiny Wings',icon:'🪽'}, halo:{label:'Pixel Halo',icon:'😇'}, badge:{label:'Python Badge',icon:'🐍'}, camera:{label:'Mini Camera',icon:'📷'},
    bag:{label:'Crossbody Bag',icon:'👜'}, tie:{label:'Coder Tie',icon:'👔'}, watch:{label:'Smart Watch',icon:'⌚'}, bracelet:{label:'Charm Bracelet',icon:'📿'}, bunnyears:{label:'Bunny Ears',icon:'🐰'}
  };
  const defaultAvatar = {gender:'female',skin:2,hair:0,shirt:1,pants:0,hairStyle:'long',hat:'none',glasses:'none',accessory:'none',eyeColor:6,eyeStyle:'sleepy'};

  const projects = [
    {id:'dice',title:'Dice Roller',icon:'🎲',level:'Beginner',time:'15 min',color:'linear-gradient(135deg,#60a5fa,#2563eb)',desc:'Roll a virtual six-sided die.',concepts:['Variables','Modules'],steps:['Import random.','Generate a number from 1 to 6.','Store the roll in a variable.','Print a friendly result.'],code:`import random

roll = random.randint(1, 6)
print(f"You rolled a {roll}!")`,check:{q:'Which function creates the random die number?',a:['random.randint(1, 6)','print(1, 6)','input(6)'],c:0}},
    {id:'calculator',title:'Calculator',icon:'🧮',level:'Beginner',time:'25 min',color:'linear-gradient(135deg,#fb923c,#ea580c)',desc:'Build a calculator that reads numbers and an operation.',concepts:['Input and Output','Casting','Operators','If, Elif and Else'],steps:['Ask for two numbers.','Convert input into numbers.','Ask which operation to use.','Use if/elif to calculate the answer.'],code:`first = float(input("First number: "))
operator = input("Choose +, -, * or /: ")
second = float(input("Second number: "))

if operator == "+":
    print(first + second)
elif operator == "-":
    print(first - second)
elif operator == "*":
    print(first * second)
elif operator == "/":
    print(first / second)
else:
    print("Unknown operator")`,check:{q:'Why do we use float() around input?',a:['To turn typed text into a number','To print the answer','To create a loop'],c:0}},
    {id:'quiz',title:'Quiz Game',icon:'❓',level:'Beginner',time:'35 min',color:'linear-gradient(135deg,#a78bfa,#7c3aed)',desc:'Ask questions and keep score.',concepts:['Variables','Strings','Input and Output','If, Elif and Else'],steps:['Create a score variable.','Ask the first question.','Compare the answer.','Add a point when correct.','Show the final score.'],code:`score = 0
answer = input("What language are you learning? ").lower()

if answer == "python":
    score += 1
    print("Correct!")
else:
    print("Try again next time.")

print(f"Score: {score}")`,check:{q:'What should hold the player’s points?',a:['A variable such as score','A comment','A module name'],c:0}},
    {id:'password',title:'Password Generator',icon:'🔐',level:'Beginner',time:'30 min',color:'linear-gradient(135deg,#34d399,#059669)',desc:'Generate a random password.',concepts:['Strings','For Loops','Modules'],steps:['Create allowed characters.','Choose random characters.','Repeat for the password length.','Join and print the result.'],code:`import random
import string

characters = string.ascii_letters + string.digits
password = ""

for _ in range(10):
    password += random.choice(characters)

print(password)`,check:{q:'What does the for loop do here?',a:['Repeats the random choice','Installs Python','Deletes the password'],c:0}},
    {id:'rps',title:'Rock Paper Scissors',icon:'✊',level:'Beginner',time:'35 min',color:'linear-gradient(135deg,#f87171,#dc2626)',desc:'Play against the computer.',concepts:['Input and Output','Modules','If, Elif and Else'],steps:['Ask for the player choice.','Let random choose for the computer.','Compare the choices.','Print win, lose or draw.'],code:`import random

choices = ["rock", "paper", "scissors"]
player = input("rock, paper or scissors? ").lower()
computer = random.choice(choices)

print(f"Computer chose {computer}")

if player == computer:
    print("Draw!")
elif (player == "rock" and computer == "scissors") or \\
     (player == "paper" and computer == "rock") or \\
     (player == "scissors" and computer == "paper"):
    print("You win!")
else:
    print("Computer wins!")`,check:{q:'Where does the computer’s choice come from?',a:['random.choice(choices)','input()','print()'],c:0}},
    {id:'guess',title:'Number Guessing Game',icon:'🎯',level:'Beginner',time:'30 min',color:'linear-gradient(135deg,#facc15,#ca8a04)',desc:'Guess a secret number.',concepts:['Variables','While Loops','Casting','If, Elif and Else'],steps:['Choose a secret number.','Ask for a guess.','Compare high/low/correct.','Repeat until correct.'],code:`import random

secret = random.randint(1, 20)
guess = None

while guess != secret:
    guess = int(input("Guess 1 to 20: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print("You got it!")`,check:{q:'Why is a while loop useful here?',a:['The player may need several guesses','It changes the font','It imports random'],c:0}},
    {id:'timer',title:'Countdown Timer',icon:'⏱️',level:'Intermediate',time:'45 min',color:'linear-gradient(135deg,#22d3ee,#0891b2)',desc:'Count down to zero.',concepts:['While Loops','Modules','Functions'],steps:['Create a timer function.','Repeat while seconds remain.','Pause one second each time.','Show a finished message.'],code:`import time

def countdown(seconds):
    while seconds > 0:
        print(seconds)
        time.sleep(1)
        seconds -= 1
    print("Time's up!")

countdown(5)`,check:{q:'What pauses the program for one second?',a:['time.sleep(1)','seconds -= 1','print(seconds)'],c:0}},
    {id:'tictactoe',title:'Tic-Tac-Toe',icon:'⭕',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#c084fc,#9333ea)',desc:'Build a simple two-player board game.',concepts:['Lists','Functions','If, Elif and Else','For Loops'],steps:['Represent the board with a list.','Display the board.','Write a function for turns.','Check winning combinations.'],code:`board = [" "] * 9

def show_board():
    print(board[0], "|", board[1], "|", board[2])
    print("---------")
    print(board[3], "|", board[4], "|", board[5])
    print("---------")
    print(board[6], "|", board[7], "|", board[8])

show_board()`,check:{q:'What stores the nine board spaces?',a:['A list','A Boolean','A comment'],c:0}},
    {id:'chatbot',title:'Mini Chatbot',icon:'💬',level:'Intermediate',time:'90 min',color:'linear-gradient(135deg,#818cf8,#4f46e5)',desc:'Create a rule-based chatbot.',concepts:['Input and Output','Functions','Match','Strings'],steps:['Read a message.','Normalize the text.','Match common messages.','Return a response.'],code:`def reply(message):
    message = message.lower()
    match message:
        case "hello" | "hi":
            return "Hello!"
        case "bye":
            return "See you later!"
        case _:
            return "I don't know that yet."

print(reply(input("You: ")))`,check:{q:'What does case _ handle?',a:['Anything not matched earlier','Only hello','A syntax comment'],c:0}},
    {id:'todo',title:'To-Do App',icon:'📝',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#4ade80,#16a34a)',desc:'Add and remove tasks.',concepts:['Lists','Functions','While Loops'],steps:['Create a task list.','Build add and remove functions.','Show a menu in a loop.','Let users quit cleanly.'],code:`tasks = []

def add_task(task):
    tasks.append(task)

while True:
    command = input("add, show or quit: ").lower()
    if command == "add":
        add_task(input("Task: "))
    elif command == "show":
        for task in tasks:
            print("-", task)
    elif command == "quit":
        break`,check:{q:'Which structure stores the tasks?',a:['A list','A float','A regex'],c:0}},
    {id:'weather',title:'Weather App',icon:'🌤️',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#38bdf8,#0284c7)',desc:'Learn how apps read API data.',concepts:['JSON','PIP','Try and Except'],steps:['Install requests.','Request API data.','Read JSON fields.','Handle connection errors.'],code:`# In VS Code terminal first: pip install requests
import requests

url = "https://api.example.com/weather"

try:
    response = requests.get(url, timeout=10)
    data = response.json()
    print(data)
except requests.RequestException:
    print("Could not reach the weather service")`,check:{q:'Why is try/except useful in this project?',a:['A network request can fail','It creates the API','It colors the output'],c:0}},
    {id:'dashboard',title:'Data Dashboard',icon:'📊',level:'Advanced',time:'4 hr',color:'linear-gradient(135deg,#64748b,#334155)',desc:'Turn data into useful information.',concepts:['PIP','Lists','Dictionaries','Functions'],steps:['Load data.','Clean important values.','Calculate summaries.','Display results clearly.'],code:`sales = [
    {"item": "A", "amount": 120},
    {"item": "B", "amount": 80},
    {"item": "C", "amount": 150}
]

def total_sales(rows):
    return sum(row["amount"] for row in rows)

print("Total:", total_sales(sales))`,check:{q:'What does total_sales() return?',a:['The sum of all amount values','A random number','The first dictionary only'],c:0}}
  ];

  const starterVideos = [
    {id:'pyn-v1',title:'Variables without the confusing words',teacher:'PYN Learning Team',lesson:'Variables',duration:'3:12',type:'PYN mini lesson'},
    {id:'pyn-v2',title:'Why lists start at zero',teacher:'PYN Learning Team',lesson:'Lists',duration:'1:44',type:'PYN mini lesson'},
    {id:'pyn-v3',title:'If statements using a game score',teacher:'PYN Learning Team',lesson:'If, Elif and Else',duration:'4:01',type:'PYN mini lesson'}
  ];

  // Real member data will come from the production backend. No fake users are shown in this prototype.
  const people = [];
  const feed = [];

  const rewardTrack = [
    {type:'shirt',value:2,label:'Sunny dress',icon:'👗'},
    {type:'accessory',value:'bow',label:'Big Bow',icon:'🎀'},
    {type:'hair',value:4,label:'Berry hair color',icon:'🎨'},
    {type:'hat',value:'cap',label:'Coder Cap',icon:'🧢'},
    {type:'accessory',value:'catears',label:'Cat Ears',icon:'🐱'},
    {type:'glasses',value:'square',label:'Square Frames',icon:'👓'},
    {type:'hairStyle',value:'long',label:'Long hair',icon:'💇'},
    {type:'shirt',value:3,label:'Dream cardigan',icon:'🩷'},
    {type:'accessory',value:'stars',label:'Star Clips',icon:'✨'},
    {type:'hat',value:'headset',label:'Code Headset',icon:'🎧'},
    {type:'hair',value:5,label:'Violet hair color',icon:'🎨'},
    {type:'shirt',value:4,label:'Mint overalls',icon:'🐸'},
    {type:'accessory',value:'scarf',label:'Cozy Scarf',icon:'🧣'},
    {type:'glasses',value:'round',label:'Round Glasses',icon:'👓'},
    {type:'hairStyle',value:'puff',label:'Twin puffs',icon:'💇'},
    {type:'shirt',value:5,label:'Golden sweater',icon:'🌟'},
    {type:'accessory',value:'necklace',label:'Star Necklace',icon:'⭐'},
    {type:'hat',value:'beanie',label:'Python Beanie',icon:'🧶'},
    {type:'glasses',value:'hacker',label:'Hacker Glasses',icon:'🕶️'},
    {type:'shirt',value:6,label:'Soft white set',icon:'☁️'},
    {type:'accessory',value:'backpack',label:'Mini Backpack',icon:'🎒'},
    {type:'hairStyle',value:'spikes',label:'Spiky hair',icon:'💇'},
    {type:'shirt',value:7,label:'Midnight tech fit',icon:'🖤'},
    {type:'accessory',value:'plush',label:'Shoulder Plush',icon:'🧸'},
    {type:'shirt',value:8,label:'Neo cyan jacket',icon:'💎'},
    {type:'hat',value:'visor',label:'Pixel Visor',icon:'🧢'},
    {type:'accessory',value:'headphones',label:'Pastel Headphones',icon:'🎧'},
    {type:'glasses',value:'shades',label:'Dark Shades',icon:'🕶️'},
    {type:'shirt',value:9,label:'Bunny pink hoodie',icon:'🐰'},
    {type:'accessory',value:'flower',label:'Flower Clip',icon:'🌸'},
    {type:'hat',value:'crown',label:'Bug Hunter Crown',icon:'👑'},
    {type:'shirt',value:10,label:'Denim street fit',icon:'👖'},
    {type:'accessory',value:'wings',label:'Tiny Wings',icon:'🪽'},
    {type:'shirt',value:11,label:'Varsity coder',icon:'🏫'},
    {type:'accessory',value:'halo',label:'Pixel Halo',icon:'😇'},
    {type:'shirt',value:12,label:'Forest explorer',icon:'🌲'},
    {type:'accessory',value:'badge',label:'Python Badge',icon:'🐍'},
    {type:'shirt',value:13,label:'Cloud lounge set',icon:'☁️'},
    {type:'accessory',value:'camera',label:'Mini Camera',icon:'📷'},
    {type:'shirt',value:14,label:'Rose academy',icon:'🎀'},
    {type:'accessory',value:'bag',label:'Crossbody Bag',icon:'👜'},
    {type:'shirt',value:15,label:'Purple gamer hoodie',icon:'🎮'},
    {type:'accessory',value:'tie',label:'Coder Tie',icon:'👔'},
    {type:'shirt',value:16,label:'Red plaid fit',icon:'❤️'},
    {type:'accessory',value:'watch',label:'Smart Watch',icon:'⌚'},
    {type:'shirt',value:17,label:'Ocean tracksuit',icon:'🌊'},
    {type:'accessory',value:'bracelet',label:'Charm Bracelet',icon:'📿'},
    {type:'shirt',value:18,label:'Cream cafe fit',icon:'🧸'},
    {type:'accessory',value:'bunnyears',label:'Bunny Ears',icon:'🐰'},
    {type:'shirt',value:19,label:'Black cat fit',icon:'🐈‍⬛'},
    {type:'shirt',value:20,label:'Peach picnic',icon:'🍑'},
    {type:'shirt',value:21,label:'Green sporty fit',icon:'⚡'},
    {type:'shirt',value:22,label:'Lavender layered set',icon:'💜'},
    {type:'shirt',value:23,label:'Monochrome coder',icon:'⌨️'}
  ];

  const defaultState = {
    username:'Coder', age:13, xp:0, streak:1, completedLessons:[], completedProjects:[],
    friends:[], sentRequests:[], incomingRequests:[], communityVideos:[], userProjects:[],
    avatar:{...defaultAvatar}, themeColor:'#2f6fed',
    unlocked:['shirt:0','shirt:1','shirt:2','shirt:3','shirt:4','shirt:6','shirt:7','shirt:8','shirt:9','shirt:10','shirt:11','shirt:12','shirt:13','shirt:14','shirt:15','shirt:16','shirt:17','shirt:18','shirt:19','shirt:20','hair:0','hair:1','hair:2','hair:3','hair:4','hair:5','hair:6','hair:7','hair:8','hair:9','hairStyle:short','hairStyle:wavy','hairStyle:long','hairStyle:pony','hairStyle:puff','hat:none','hat:cap','hat:beanie','glasses:none','glasses:round','glasses:square','accessory:none','accessory:stars','accessory:bracelet','accessory:bow','accessory:flower','accessory:scarf','accessory:necklace','accessory:backpack','accessory:headphones','accessory:mask','accessory:badge','accessory:camera','accessory:bag','accessory:tie','accessory:watch','accessory:catears'],
    unlockHistory:[]
  };

  const store = {
    get(){
      try {
        const parsed = JSON.parse(localStorage.getItem('pynV8State') || 'null');
        if (!parsed) return clone(defaultState);
        return {...clone(defaultState), ...parsed, avatar:{...defaultAvatar,...(parsed.avatar||{})}};
      } catch(e){ return clone(defaultState); }
    },
    save(){ try{ localStorage.setItem('pynV8State', JSON.stringify(state)); }catch(e){} },
    started(){ try{return localStorage.getItem('pynV8Started')==='1'}catch(e){return false} },
    setStarted(v){ try{ if(v)localStorage.setItem('pynV8Started','1'); else localStorage.removeItem('pynV8Started'); }catch(e){} }
  };
  function clone(o){ return JSON.parse(JSON.stringify(o)); }
  let state = store.get();
  let communityTab='feed';
  let avatarTab='type';
  let authGender='female';

  function ageBand(age){ age=Number(age); if(age<=12)return '9–12'; if(age<=15)return '13–15'; if(age<=17)return '16–17'; if(age<=20)return '18–20'; return '21+'; }
  function sameBand(a,b){ return ageBand(a)===ageBand(b); }
  function esc(str=''){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
  function allProjects(){ return [...projects,...state.userProjects]; }
  function applyTheme(){ document.documentElement.style.setProperty('--accent',state.themeColor||'#2f6fed'); }

  function hexToRgb(hex){
    const s=(hex||'#000').replace('#','');
    const full=s.length===3?s.split('').map(x=>x+x).join(''):s;
    const n=parseInt(full,16);
    return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
  }
  function rgba(hex,a){const {r,g,b}=hexToRgb(hex);return `rgba(${r},${g},${b},${a})`;}
  function shade(hex,amt){const {r,g,b}=hexToRgb(hex);const clamp=v=>Math.max(0,Math.min(255,v));return `rgb(${clamp(r+amt)},${clamp(g+amt)},${clamp(b+amt)})`;}
  function outfitMeta(index){ return OUTFITS[index] || OUTFITS[1]; }
  function hairBackSvg(style,hair){
    const cap = `<path d="M50 74c0-41 17-61 40-61s40 20 40 61c0 8-1 14-2 18-10-11-23-17-38-17S52 81 42 92c-1-4-2-10-2-18 0 0 10-22 10-0Z" fill="${hair}"/>`;
    if(style==='short') return cap + `<path d="M50 92c0 17 2 30 5 41h18c-2-13-1-25 3-36 3-8 3-16 0-23Z" fill="${hair}"/><path d="M130 92c0 17-2 30-5 41h-18c2-13 1-25-3-36-3-8-3-16 0-23Z" fill="${hair}"/>`;
    if(style==='long') return cap + `<path d="M48 90c-4 31-2 70 5 104h23c-5-26-4-57 0-80 2-10 1-18-2-24Z" fill="${hair}"/><path d="M132 90c4 31 2 70-5 104h-23c5-26 4-57 0-80-2-10-1-18 2-24Z" fill="${hair}"/>`;
    if(style==='wavy') return cap + `<path d="M47 92c-5 30-2 69 6 103 11-1 18-8 21-15-6-12-6-24-1-37-5-13-5-32 0-51Z" fill="${hair}"/><path d="M133 92c5 30 2 69-6 103-11-1-18-8-21-15 6-12 6-24 1-37 5-13 5-32 0-51Z" fill="${hair}"/>`;
    if(style==='pony') return cap + `<path d="M131 78c20 9 25 25 18 46-5 15-15 26-28 35 8-24 10-50 10-81Z" fill="${hair}"/>` + `<path d="M52 94c-3 22-2 50 3 81h20c-4-17-5-45-2-81Z" fill="${hair}"/>`;
    if(style==='puff') return `<circle cx="52" cy="58" r="17" fill="${hair}"/><circle cx="128" cy="58" r="17" fill="${hair}"/>` + cap + `<path d="M49 94c-3 24-2 54 3 86h21c-4-19-5-49-2-86Z" fill="${hair}"/><path d="M131 94c3 24 2 54-3 86h-21c4-19 5-49 2-86Z" fill="${hair}"/>`;
    if(style==='spikes') return `<path d="M41 84c1-24 11-48 34-62l7 9 8-12 7 12 10-9c22 15 33 38 32 62-11-13-28-20-48-20S52 71 41 84Z" fill="${hair}"/>` + `<path d="M49 94c-3 24-2 45 4 72h20c-3-14-3-38 0-72Z" fill="${hair}"/><path d="M131 94c3 24 2 45-4 72h-20c3-14 3-38 0-72Z" fill="${hair}"/>`;
    return cap;
  }
  function hairFrontSvg(style,hair){
    if(style==='spikes') return `<path d="M52 44l14 14 12-16 12 14 15-16 12 14 9-7v24c-11-4-23-6-36-6s-26 2-38 7Z" fill="${hair}"/>`;
    if(style==='puff') return `<path d="M50 48c9-13 23-19 40-19s31 6 40 19l-4 22c-10-8-24-12-36-12s-26 4-36 12Z" fill="${hair}"/>`;
    if(style==='pony') return `<path d="M50 46c10-12 24-18 40-18s30 6 40 18l-4 22c-10-8-24-12-36-12s-26 4-36 12Z" fill="${hair}"/><path d="M63 54c10-8 18-11 27-11 9 0 17 3 27 11" stroke="${shade(hair,-18)}" stroke-width="4" stroke-linecap="round" fill="none"/>`;
    if(style==='wavy') return `<path d="M50 47c10-12 24-18 40-18s30 6 40 18l-5 24c-9-8-22-13-35-13s-26 5-35 13Z" fill="${hair}"/>`;
    if(style==='long') return `<path d="M50 47c10-12 24-18 40-18s30 6 40 18l-5 20c-8-7-20-11-35-11s-27 4-35 11Z" fill="${hair}"/><path d="M61 53c7 7 18 10 29 10s22-3 29-10" stroke="${rgba('#fff',.12)}" stroke-width="3" stroke-linecap="round" fill="none"/>`;
    return `<path d="M50 49c10-11 24-17 40-17s30 6 40 17l-4 18c-10-6-22-10-36-10s-26 4-36 10Z" fill="${hair}"/>`;
  }
  function eyeMarkup(side,cfg){
    const x=side==='left'?73:107;
    const c=EYES[cfg.eyeColor]||EYES[6];
    if(cfg.eyeStyle==='sleepy') return `<path d="M${x-12} 84c5 6 19 6 24 0" fill="none" stroke="#5a352e" stroke-width="4" stroke-linecap="round"/><path d="M${x-9} 79l-3-2M${x+8} 79l3-2" stroke="#5a352e" stroke-width="2.2" stroke-linecap="round"/>`;
    if(cfg.eyeStyle==='cat') return `<path d="M${x-14} 82c5-9 19-9 28 0-2 12-8 18-14 18s-12-6-14-18Z" fill="#fff"/><ellipse cx="${x}" cy="84" rx="9" ry="12" fill="${c}"/><ellipse cx="${x}" cy="85" rx="2.6" ry="8" fill="#231817"/><circle cx="${x-3}" cy="79" r="3" fill="#fff"/><path d="M${x-17} 79l5-3" stroke="#4d2d2a" stroke-width="2.5" stroke-linecap="round"/>`;
    if(cfg.eyeStyle==='sparkle') return `<ellipse cx="${x}" cy="84" rx="13" ry="15" fill="#fff"/><ellipse cx="${x}" cy="85" rx="9" ry="11.5" fill="${c}"/><ellipse cx="${x}" cy="88" rx="3.4" ry="6" fill="#241817"/><circle cx="${x-4}" cy="79" r="3.4" fill="#fff"/><path d="M${x+5} 75l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5Z" fill="#fff"/><circle cx="${x+3}" cy="90" r="1.4" fill="#fff"/>`;
    return `<ellipse cx="${x}" cy="84" rx="13" ry="15" fill="#fff"/><ellipse cx="${x}" cy="85" rx="9" ry="11.5" fill="${c}"/><ellipse cx="${x}" cy="88" rx="3.4" ry="6" fill="#241817"/><circle cx="${x-4}" cy="79" r="3.4" fill="#fff"/><circle cx="${x+3}" cy="90" r="1.4" fill="#fff"/>`;
  }
  function hatSvg(type){
    if(type==='cap') return `<path d="M58 40c8-11 19-16 32-16s24 5 32 16l-3 12H61Z" fill="#4b7cf4"/><path d="M111 43c13 1 22 6 28 13-14 1-24-1-31-4Z" fill="#3155b9"/>`;
    if(type==='beanie') return `<path d="M56 45c5-17 17-27 34-27s29 10 34 27Z" fill="#8b6be5"/><rect x="54" y="42" width="72" height="13" rx="6" fill="#6d51bb"/>`;
    if(type==='headset') return `<path d="M58 60c0-21 13-37 32-37s32 16 32 37" fill="none" stroke="#20242d" stroke-width="7"/><rect x="50" y="61" width="10" height="22" rx="5" fill="#20242d"/><rect x="120" y="61" width="10" height="22" rx="5" fill="#20242d"/>`;
    if(type==='visor') return `<rect x="57" y="43" width="66" height="16" rx="8" fill="#45c9ff"/><rect x="64" y="47" width="52" height="7" rx="3.5" fill="rgba(255,255,255,.5)"/>`;
    if(type==='crown') return `<path d="M58 45l9-13 12 10 11-16 11 16 12-10 9 13v13H58Z" fill="#ffd45d" stroke="#c89f2b" stroke-width="1.8"/>`;
    return '';
  }
  function glassesSvg(type){
    if(type==='none') return '';
    if(type==='round') return `<circle cx="73" cy="80" r="9" fill="none" stroke="#2f3440" stroke-width="2.2"/><circle cx="107" cy="80" r="9" fill="none" stroke="#2f3440" stroke-width="2.2"/><path d="M82 79h16" stroke="#2f3440" stroke-width="2.2"/>`;
    if(type==='square') return `<rect x="63" y="72" width="20" height="17" rx="5" fill="none" stroke="#2f3440" stroke-width="2.2"/><rect x="97" y="72" width="20" height="17" rx="5" fill="none" stroke="#2f3440" stroke-width="2.2"/><path d="M83 79h14" stroke="#2f3440" stroke-width="2.2"/>`;
    if(type==='hacker') return `<rect x="62" y="72" width="56" height="16" rx="7" fill="rgba(32,36,45,.75)"/><path d="M68 80h44" stroke="#6af5c1" stroke-width="2" stroke-dasharray="4 3"/>`;
    return `<path d="M60 74c8-4 19-6 30-6s22 2 30 6c-2 10-8 18-16 21H76c-8-3-14-11-16-21Z" fill="rgba(28,31,37,.78)"/>`;
  }
  function accessorySvg(type){
    if(type==='none') return '';
    if(type==='bow') return `<path d="M125 50c8-7 17-5 19 2 2 7-6 12-15 10l-4 6-4-6c-9 2-17-3-15-10 2-7 11-9 19-2Z" fill="#f49cbe"/>`;
    if(type==='catears') return `<path d="M58 38l-9-18 20 9Z" fill="#302524"/><path d="M122 38l9-18-20 9Z" fill="#302524"/>`;
    if(type==='bunnyears') return `<ellipse cx="70" cy="20" rx="7" ry="21" fill="#fff" stroke="#f0b9c9" stroke-width="2"/><ellipse cx="110" cy="20" rx="7" ry="21" fill="#fff" stroke="#f0b9c9" stroke-width="2"/>`;
    if(type==='stars') return `<path d="M56 48l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#ffd85a"/><path d="M126 54l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5Z" fill="#fff0a0"/>`;
    if(type==='flower') return `<g transform="translate(126 54)"><circle r="4" fill="#ffd04a"/><circle cy="-6" r="5" fill="#f7a9c7"/><circle cx="6" r="5" fill="#f7a9c7"/><circle cy="6" r="5" fill="#f7a9c7"/><circle cx="-6" r="5" fill="#f7a9c7"/></g>`;
    if(type==='scarf') return `<path d="M71 108c11 6 27 6 38 0l3 10c-14 8-30 8-44 0Z" fill="#db8a68"/><path d="M102 116l8 25-10 3-7-24Z" fill="#c66f4d"/>`;
    if(type==='necklace') return `<path d="M78 110c3 12 21 12 24 0" fill="none" stroke="#d9af3f" stroke-width="2"/><circle cx="90" cy="120" r="3" fill="#ffd95e"/>`;
    if(type==='backpack') return `<path d="M119 120c10 2 16 10 16 22v20h-17Z" fill="#7366bd"/>`;
    if(type==='plush') return `<g transform="translate(122 122)"><circle r="9" fill="#d9ab83"/><circle cx="-5" cy="-7" r="4" fill="#d9ab83"/><circle cx="5" cy="-7" r="4" fill="#d9ab83"/></g>`;
    if(type==='headphones') return `<path d="M58 62c0-22 14-38 32-38s32 16 32 38" fill="none" stroke="#cf9be5" stroke-width="7"/><rect x="50" y="62" width="10" height="22" rx="5" fill="#b07aca"/><rect x="120" y="62" width="10" height="22" rx="5" fill="#b07aca"/>`;
    if(type==='mask') return `<path d="M76 92c8 5 20 5 28 0v10c-8 6-20 6-28 0Z" fill="#d9efff"/>`;
    if(type==='wings') return `<path d="M60 126c-17-8-25 3-18 16 4 8 12 12 21 14-3-9-4-19-3-30Z" fill="#ebe6ff" stroke="#c8bef7"/><path d="M120 126c17-8 25 3 18 16-4 8-12 12-21 14 3-9 4-19 3-30Z" fill="#ebe6ff" stroke="#c8bef7"/>`;
    if(type==='halo') return `<ellipse cx="90" cy="17" rx="26" ry="6" fill="none" stroke="#ffd85a" stroke-width="4"/>`;
    if(type==='badge') return `<circle cx="106" cy="126" r="5" fill="#ffd85e"/>`;
    if(type==='camera') return `<rect x="109" y="132" width="19" height="14" rx="3" fill="#3e4148"/><circle cx="118" cy="139" r="4" fill="#78c7e9"/>`;
    if(type==='bag') return `<rect x="114" y="133" width="17" height="21" rx="4" fill="#ba8e6a"/>`;
    if(type==='tie') return `<path d="M88 111h4l3 8-5 12-5-12Z" fill="#5473d8"/>`;
    if(type==='watch') return `<rect x="50" y="129" width="7" height="9" rx="2" fill="#242a34"/>`;
    if(type==='bracelet') return `<path d="M126 134c4 2 7 2 10 0" fill="none" stroke="#ecb75f" stroke-width="3"/>`;
    return '';
  }
  function outfitSvg(outfit){
    const p=outfit.primary,s=outfit.secondary,b=outfit.bottom;
    if(outfit.kind==='dress') return `<path d="M80 117c3-8 8-12 10-12s7 4 10 12v10H80Z" fill="${p}"/><path d="M75 127h30l8 34H67Z" fill="${s}"/><path d="M81 118h18" stroke="${shade(p,-18)}" stroke-width="2"/>`;
    if(outfit.kind==='cardigan') return `<rect x="73" y="114" width="34" height="40" rx="12" fill="${s}"/><path d="M73 118c5-4 10-6 17-6v42H78c-3 0-5-2-5-5Z" fill="${p}"/><path d="M90 114v40" stroke="${shade(p,-18)}" stroke-width="2"/><rect x="76" y="154" width="28" height="14" rx="7" fill="${b}"/>`;
    if(outfit.kind==='overalls') return `<rect x="74" y="114" width="32" height="40" rx="12" fill="${s}"/><rect x="79" y="118" width="22" height="44" rx="10" fill="${p}"/><rect x="80" y="111" width="5" height="16" rx="3" fill="${p}"/><rect x="95" y="111" width="5" height="16" rx="3" fill="${p}"/>`;
    if(outfit.kind==='uniform') return `<rect x="73" y="114" width="34" height="40" rx="12" fill="${p}"/><path d="M80 114h20l-4 9H84Z" fill="#fff"/><path d="M90 123l4 13h-8Z" fill="#cf5974"/><rect x="76" y="154" width="28" height="14" rx="7" fill="${b}"/>`;
    if(outfit.kind==='jacket') return `<rect x="73" y="114" width="34" height="40" rx="12" fill="${s}"/><path d="M73 120c4-4 9-6 15-6v40H79c-3 0-6-3-6-6Z" fill="${p}"/><path d="M107 120c-4-4-9-6-15-6v40h9c3 0 6-3 6-6Z" fill="${p}"/><rect x="76" y="154" width="28" height="14" rx="7" fill="${b}"/>`;
    if(outfit.kind==='sweater') return `<rect x="73" y="114" width="34" height="40" rx="12" fill="${p}"/><path d="M76 126h28" stroke="rgba(255,255,255,.45)" stroke-width="2"/><rect x="76" y="154" width="28" height="14" rx="7" fill="${b}"/>`;
    return `<rect x="73" y="114" width="34" height="40" rx="12" fill="${p}"/><path d="M78 126h24" stroke="${shade(p,-14)}" stroke-width="2"/><rect x="76" y="154" width="28" height="14" rx="7" fill="${b}"/>`;
  }
  function avatarHTML(cfg, stageClass='person-stage', online=null){
    cfg={...defaultAvatar,...cfg};
    const skin=SKINS[cfg.skin]||SKINS[2],hair=HAIRS[cfg.hair]||HAIRS[0],outfit=outfitMeta(cfg.shirt);
    const neck = skin;
    const shoulderW = cfg.gender==='male' ? 40 : 34;
    const bodyTopX = 90 - (shoulderW/2);
    const bodyTopR = bodyTopX + shoulderW;
    const hipW = cfg.gender==='male' ? 18 : 20;
    const hipL = 90 - hipW;
    const hipR = 90 + hipW;
    const armL = cfg.gender==='male' ? 64 : 66;
    const armR = cfg.gender==='male' ? 116 : 114;
    return `<div class="avatar-stage ${stageClass}"><div class="chibi-wrap"><svg class="chibi-svg" viewBox="0 0 180 220" aria-hidden="true">
      <rect x="10" y="10" width="160" height="200" rx="28" fill="${rgba(skin,.10)}"/>
      <ellipse cx="90" cy="202" rx="34" ry="7" fill="rgba(0,0,0,.08)"/>
      ${hairBackSvg(cfg.hairStyle,hair)}
      <ellipse cx="90" cy="68" rx="42" ry="45" fill="${skin}" stroke="${shade(skin,-16)}" stroke-width="1.6"/>
      <path d="M83 107h14v9H83z" fill="${neck}"/>
      <path d="M${bodyTopX} 118Q90 110 ${bodyTopR} 118L${hipR} 149Q90 160 ${hipL} 149Z" fill="${skin}"/>
      <path d="M${armL} 121c-10 10-13 22-14 42l12 1c1-12 4-24 10-33Z" fill="${skin}"/><path d="M${armR} 121c10 10 13 22 14 42l-12 1c-1-12-4-24-10-33Z" fill="${skin}"/>
      ${outfitSvg(outfit)}
      <path d="M79 160c0 6-1 19 0 31h11c1-12 1-24 0-31Z" fill="${skin}"/><path d="M90 160c0 6-1 19 0 31h11c1-12 1-24 0-31Z" fill="${skin}"/>
      <rect x="74" y="187" width="18" height="9" rx="4.5" fill="#fff"/><rect x="88" y="187" width="18" height="9" rx="4.5" fill="#fff"/>
      ${hairFrontSvg(cfg.hairStyle,hair)}
      ${hatSvg(cfg.hat)}
      ${accessorySvg(cfg.accessory)}
      <path d="M65 67c6-4 12-5 18-3" stroke="#5a352e" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M97 64c6-2 12-1 18 3" stroke="#5a352e" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      ${eyeMarkup('left',cfg)}${eyeMarkup('right',cfg)}
      <path d="M84 101c3 3 9 3 12 0" stroke="#8b5d53" stroke-width="2.1" stroke-linecap="round" fill="none"/>
      ${glassesSvg(cfg.glasses)}
    </svg>${online===null?'':`<span class="presence-bubble ${online?'online':''}"></span>`}</div></div>`;
  }

  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.add('hidden'),2200);}
  function openModal(html){$('#modal-content').innerHTML=html;$('#modal').classList.remove('hidden');}
  function closeModal(){$('#modal').classList.add('hidden');}
  function isUnlocked(type,value){return state.unlocked.includes(`${type}:${value}`);}

  function renderAll(){applyTheme();renderHeader();renderHome();renderLessons();renderProjects();renderCommunity();renderProfile();}
  function renderHeader(){ $('#xp-count').textContent=state.xp; $('#streak-count').textContent=state.streak; $('#header-avatar').innerHTML=avatarHTML(state.avatar,'small-stage',true); }

  function projectCard(p,i){
    const done=state.completedProjects.includes(p.id);
    return `<article class="project-card" data-project="${i}"><div class="project-thumb" style="background:${p.color||'linear-gradient(135deg,#334155,#111827)'}"><span>${p.icon||'💻'}</span>${done?'<b class="completed-badge">✓ BUILT</b>':''}</div><div class="project-info"><div class="project-meta"><span class="difficulty">${esc(p.level||'Custom')}</span><span>•</span><span>${esc(p.time||'Your pace')}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.desc||'Your Python project')}</p><div class="project-meta"><span>${p.userMade?'MY PROJECT':esc((p.concepts||[]).slice(0,2).join(' · '))}</span></div></div></article>`;
  }

  function renderHome(){
    $('#welcome-title').textContent=`Hi ${state.username}`;
    $('#featured-projects').innerHTML=allProjects().slice(0,6).map((p,i)=>projectCard(p,i)).join('');
    const next=lessons.findIndex((_,i)=>!state.completedLessons.includes(i));
    const indices=[next<0?0:next,...lessons.map((_,i)=>i).filter(i=>i!==next&&!state.completedLessons.includes(i)).slice(0,3)];
    $('#learning-row').innerHTML=indices.slice(0,4).map(i=>{const l=lessons[i],done=state.completedLessons.includes(i);return `<article class="learning-card" data-lesson="${i}"><div class="learning-art"><span class="unit-number">${i+1}</span></div><div class="learning-body"><span>PYN Fundamentals</span><h3>${esc(l.title)}</h3><span>${done?'Completed':'Open lesson'}</span><div class="tiny-progress"><div style="width:${done?100:20}%"></div></div></div></article>`;}).join('');
    const homePeople=[...people].sort((a,b)=>Number(b.active)-Number(a.active)); $('#people-row').innerHTML=homePeople.length?homePeople.map(p=>`<div class="person-chip" data-person="${p.id}">${avatarHTML(p.avatar,'person-stage',p.active)}<strong>${esc(p.name)}</strong><small>${p.active?'Active now':'Offline'}</small></div>`).join(''):'<div class="real-people-empty"><b>Your friends will appear here.</b><span>PYN will show real members only. Active friends will be shown first when the live database is connected.</span></div>';
    $('#video-row').innerHTML=currentVideos().slice(0,5).map(videoCard).join('');
    bindDynamic();
  }

  function renderProjects(filter='all'){
    const all=allProjects(); const list=filter==='all'?all:all.filter(p=>p.level===filter);
    $('#project-grid').innerHTML=list.map(p=>projectCard(p,all.indexOf(p))).join(''); bindDynamic();
  }

  function renderLessons(){
    const grouped={}; lessons.forEach((l,i)=>{(grouped[l.chapter]??=[]).push({l,i});});
    let unit=0;
    const guideAvatars=[
      {...state.avatar,hairStyle:'short',shirt:0,accessory:'stars'},
      {...state.avatar,hairStyle:'wavy',shirt:3,accessory:'bow'},
      {...state.avatar,hairStyle:'long',shirt:4,accessory:'necklace'},
      {...state.avatar,hairStyle:'pony',shirt:10,accessory:'backpack'}
    ];
    $('#chapters').innerHTML=Object.entries(grouped).map(([chapter,items])=>{
      unit++;
      const done=items.filter(x=>state.completedLessons.includes(x.i)).length;
      const clean=chapter.replace(/^\d+\s*·\s*/,'');
      const guide=guideAvatars[(unit-1)%guideAvatars.length];
      const nodes=items.map(({l,i},n)=>{
        const complete=state.completedLessons.includes(i);
        const side=n%2===0?'left':'right';
        const avatarBreak=(n===1 || (items.length>4 && n===3))?`<div class="path-chibi ${side}">${avatarHTML(guide,'path-guide',null)}<span>${n===1?'Keep going!':'You’ve got this!'}</span></div>`:'';
        return `${avatarBreak}<button class="duo-path-node ${side} ${complete?'done':''}" data-lesson="${i}">
          <span class="lesson-orb">${complete?'✓':l.icon||i+1}</span>
          <span class="lesson-label"><b>${esc(l.title)}</b><small>${complete?'Completed · tiny exam passed':esc(l.desc)}</small></span>
        </button>`;
      }).join('');
      return `<section class="duo-unit">
        <div class="duo-unit-banner">
          <div><span>UNIT ${unit}</span><h2>${esc(clean)}</h2><p>${done}/${items.length} lessons complete</p></div>
          <div class="unit-guide">${avatarHTML(guide,'unit-guide',null)}</div>
        </div>
        <div class="duo-path">${nodes}</div>
      </section>`;
    }).join('');
    $('#course-percent').textContent=Math.round(state.completedLessons.length/lessons.length*100)+'%';
    bindDynamic();
  }

  function currentVideos(){return [...starterVideos,...state.communityVideos];}
  function videoCard(v){return `<article class="video-card" data-video="${esc(v.id)}"><div class="video-thumb"><span class="play-circle">▶</span><span class="video-duration">${esc(v.duration||'2:30')}</span></div><div class="video-info"><h3>${esc(v.title)}</h3><p>${esc(v.lesson||'Python')} · ${esc(v.type||'Video')}</p><div class="teacher-line"><span>●</span><b>${esc(v.teacher||'PYN')}</b></div></div></article>`;}

  function renderCommunity(){
    $('#age-band-label').textContent=ageBand(state.age); $('#request-badge').textContent=state.incomingRequests.length||'';
    $('#online-list').innerHTML='<p>No real users are connected in this local prototype yet.</p>'; renderCommunityTab();
  }
  function renderCommunityTab(){
    $$('.subtab').forEach(b=>b.classList.toggle('active',b.dataset.community===communityTab)); const box=$('#community-content');
    if(communityTab==='feed') box.innerHTML='<div class="empty-state"><b>No fake activity.</b><br>Real member activity will appear here after PYN is connected to its production database.</div>';
    else if(communityTab==='videos') box.innerHTML=currentVideos().length?currentVideos().map(v=>`<article class="community-video">${videoCard(v)}</article>`).join(''):'<div class="empty-state">No teaching videos yet.</div>';
    else box.innerHTML='<div class="empty-state">No real friend requests yet.</div>';
    bindDynamic();
  }

  function renderProfile(){
    const temp=document.createElement('div');temp.innerHTML=avatarHTML(state.avatar,'large-stage',true);const stage=temp.firstElementChild;$('#profile-avatar-stage').innerHTML=stage?stage.innerHTML:'';
    $('#profile-name').textContent=state.username; $('#profile-band').textContent=`${ageBand(state.age)} learning group`; $('#profile-level').textContent=Math.floor(state.xp/100)+1; $('#profile-xp').textContent=state.xp; $('#profile-lessons').textContent=state.completedLessons.length; $('#profile-projects').textContent=state.completedProjects.length; $('#display-name-input').value=state.username;
    $('#customizer').innerHTML=customizerHTML();
    $('#unlock-list').innerHTML=state.unlockHistory.length?state.unlockHistory.slice(-8).reverse().map(r=>`<div class="unlock-item"><span class="unlock-symbol">${r.icon}</span><div><b>${esc(r.label)}</b><span>PYN Accessory</span></div></div>`).join(''):'<p class="muted" style="font-size:11px">Pass tiny exams and project checks to unlock PYN Accessories.</p>';
    bindCustomizer();
  }

  function customizerHTML(){
    const tabs=[['type','Male / Female'],['skin','Skin'],['eyes','Eyes'],['hair','Hair'],['outfit','Outfit'],['accessories','Accessories'],['hats','Hats'],['glasses','Glasses'],['theme','PYN colour']];
    let panel='';
    if(avatarTab==='type') panel=`<p class="creator-help">Choose your chibi base. It only changes the base body slightly. Everything else can be mixed freely.</p><div class="gender-pick compact"><button class="gender-option ${state.avatar.gender==='female'?'active':''}" data-custom="gender" data-value="female"><span>♀</span><b>Female</b><small>Base</small></button><button class="gender-option ${state.avatar.gender==='male'?'active':''}" data-custom="gender" data-value="male"><span>♂</span><b>Male</b><small>Base</small></button></div>`;
    if(avatarTab==='skin') panel=`<p class="creator-help">Choose a skin tone for your chibi avatar.</p><div class="creator-grid swatches">${SKINS.map((c,i)=>`<button class="creator-tile ${state.avatar.skin===i?'selected':''}" data-custom="skin" data-value="${i}"><span style="background:${c}"></span><b>Skin ${i+1}</b></button>`).join('')}</div>`;
    if(avatarTab==='eyes') panel=`<h4>Eye style</h4><div class="creator-grid">${Object.entries(EYE_STYLES).map(([v,label])=>`<button class="creator-tile ${state.avatar.eyeStyle===v?'selected':''}" data-custom="eyeStyle" data-value="${v}"><span>👁️</span><b>${label}</b><small>Chibi eyes</small></button>`).join('')}</div><h4>Eye colour</h4><div class="creator-grid swatches">${EYES.map((c,i)=>`<button class="creator-tile ${state.avatar.eyeColor===i?'selected':''}" data-custom="eyeColor" data-value="${i}"><span style="background:radial-gradient(circle at 35% 35%, #fff 0 18%, ${c} 35%, ${shade(c,-18)} 100%)"></span><b>Eye ${i+1}</b></button>`).join('')}</div>`;
    if(avatarTab==='hair') panel=`<h4>Hair style</h4><div class="creator-grid">${Object.entries(HAIR_STYLES).map(([v,label])=>{const locked=!isUnlocked('hairStyle',v);return `<button class="creator-tile ${state.avatar.hairStyle===v?'selected':''}" data-custom="hairStyle" data-value="${v}" ${locked?'disabled':''}><span>💇</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':'<small>Chibi style</small>'}</button>`}).join('')}</div><h4>Hair colour</h4><div class="creator-grid swatches">${HAIRS.map((c,i)=>{const locked=!isUnlocked('hair',i);return `<button class="creator-tile ${state.avatar.hair===i?'selected':''}" data-custom="hair" data-value="${i}" ${locked?'disabled':''}><span style="background:${c}"></span><b>${locked?'Locked':'Colour '+(i+1)}</b></button>`}).join('')}</div>`;
    if(avatarTab==='outfit') panel=`<p class="creator-help">Outfits are cute chibi sets inspired by your references.</p><div class="creator-grid">${OUTFITS.map((o,i)=>{const locked=!isUnlocked('shirt',i);return `<button class="creator-tile ${state.avatar.shirt===i?'selected':''}" data-custom="shirt" data-value="${i}" ${locked?'disabled':''}><span style="background:linear-gradient(180deg, ${o.primary}, ${o.secondary})">${o.icon}</span><b>${locked?'🔒 Locked':esc(o.label)}</b><small>${locked?'Pass lessons to unlock':'Chibi outfit'}</small></button>`}).join('')}</div>`;
    if(avatarTab==='accessories') panel=`<p class="creator-help">Collect accessories by passing lessons and project checks.</p><div class="creator-grid">${Object.entries(ACCESSORIES).map(([v,item])=>{const locked=!isUnlocked('accessory',v);return `<button class="creator-tile ${state.avatar.accessory===v?'selected':''}" data-custom="accessory" data-value="${v}" ${locked?'disabled':''}><span>${item.icon}</span><b>${item.label}</b>${locked?'<small>🔒 Unlock</small>':'<small>Accessory</small>'}</button>`}).join('')}</div>`;
    if(avatarTab==='hats') panel=`<div class="creator-grid">${Object.entries(HATS).map(([v,label])=>{const locked=!isUnlocked('hat',v);return `<button class="creator-tile ${state.avatar.hat===v?'selected':''}" data-custom="hat" data-value="${v}" ${locked?'disabled':''}><span>${v==='crown'?'👑':v==='headset'?'🎧':v==='beanie'?'🧶':v==='visor'?'🕶️':v==='cap'?'🧢':'◯'}</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':'<small>Accessory</small>'}</button>`}).join('')}</div>`;
    if(avatarTab==='glasses') panel=`<div class="creator-grid">${Object.entries(GLASSES).map(([v,label])=>{const locked=!isUnlocked('glasses',v);return `<button class="creator-tile ${state.avatar.glasses===v?'selected':''}" data-custom="glasses" data-value="${v}" ${locked?'disabled':''}><span>👓</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':'<small>Accessory</small>'}</button>`}).join('')}</div>`;
    if(avatarTab==='theme') panel=`<p class="creator-help">Pick the colour you want PYN to use for buttons, progress and highlights.</p><div class="theme-grid">${THEME_COLORS.map(c=>`<button class="theme-pick ${state.themeColor===c?'selected':''}" style="background:${c}" data-theme="${c}" aria-label="Choose ${c}"></button>`).join('')}</div>`;
    return `<div class="avatar-creator"><div class="creator-tabs">${tabs.map(([id,label])=>`<button class="${avatarTab===id?'active':''}" data-avatar-tab="${id}">${label}</button>`).join('')}</div><div class="creator-panel">${panel}</div></div>`;
  }

  function bindCustomizer(){
    $$('[data-avatar-tab]').forEach(b=>b.onclick=()=>{avatarTab=b.dataset.avatarTab;renderProfile();});
    $$('[data-custom]').forEach(b=>b.onclick=()=>{if(b.disabled)return;const type=b.dataset.custom,raw=b.dataset.value;state.avatar[type]=['skin','hair','shirt','pants','eyeColor'].includes(type)?Number(raw):raw;store.save();renderProfile();renderHeader();});
    $$('[data-theme]').forEach(b=>b.onclick=()=>{state.themeColor=b.dataset.theme;store.save();applyTheme();renderProfile();toast('PYN colour changed');});
  }

  function openLesson(i){
    const l=lessons[i],done=state.completedLessons.includes(i);
    openModal(`<span class="kicker">PYN FUNDAMENTALS · LESSON ${i+1}</span><h1>${esc(l.title)}</h1><p>${esc(l.explain)}</p><h2>See it in Python</h2><pre class="modal-code">${esc(l.code)}</pre><div class="practice-bar"><div><b>Use VS Code to practice!</b><span>Copy the example, change it, and run it yourself.</span></div><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Download VS Code ↗</a></div><h2>Watch it explained</h2><div class="lesson-video-box"><div class="video-thumb"><span class="play-circle">▶</span></div><div><b>${esc(l.video)}</b><p>This is the video slot for this lesson. PYN can later use approved PYN-made or creator videos.</p><button class="small-btn" data-video-lesson="${i}">▶ Mini lesson</button></div></div><h2>Tiny exam</h2>${done?'<div class="reward-callout"><span>✅</span><div><b>Lesson passed.</b><span>Your lesson is completed because you passed the tiny exam.</span></div></div>':`<div class="exam-box"><h3>${esc(l.question)}</h3><div class="answer-list">${l.answers.map((a,n)=>`<button class="answer-option" data-answer="${n}">${esc(a)}</button>`).join('')}</div><p id="exam-result" class="exam-result">Pass this question to complete the lesson.</p></div>`}`);
    if(!done) $$('[data-answer]').forEach(btn=>btn.onclick=()=>{const result=$('#exam-result');if(Number(btn.dataset.answer)===l.correct){result.textContent='✅ Correct! Lesson completed.';result.className='exam-result correct';completeLesson(i);setTimeout(()=>{closeModal();renderAll();showLessonReward(i);},400);}else{result.textContent='Not quite. Try again.';result.className='exam-result wrong';}});
  }
  function completeLesson(i){if(state.completedLessons.includes(i))return;state.completedLessons.push(i);state.xp+=25;const reward=rewardTrack[i%rewardTrack.length],key=`${reward.type}:${reward.value}`;if(!state.unlocked.includes(key)){state.unlocked.push(key);state.unlockHistory.push(reward);}store.save();}
  function showLessonReward(i){const reward=rewardTrack[i%rewardTrack.length];openModal(`<div class="reward-screen"><div class="reward-big">${reward.icon}</div><span class="kicker">TINY EXAM PASSED</span><h1>Lesson completed!</h1><p>+25 XP and a new <b>PYN Accessory</b>: <b>${esc(reward.label)}</b>.</p><button id="equip-reward" class="primary-btn">Open avatar creator</button></div>`);$('#equip-reward').onclick=()=>{closeModal();go('profile');};}

  function openProject(i){
    const p=allProjects()[i]; if(!p)return; const done=state.completedProjects.includes(p.id);
    const concepts=(p.concepts||[]).map(c=>{const li=lessons.findIndex(l=>l.title===c);const passed=li>=0&&state.completedLessons.includes(li);return `<button class="concept-pill" ${li>=0?`data-lesson="${li}"`:''}>${passed?'✓ ':''}${esc(c)}</button>`;}).join('');
    const check=p.check||{q:'Before marking a project complete, what should you do?',a:['Run and test the Python code','Only read the title','Skip the code'],c:0};
    openModal(`<span class="kicker">${esc((p.level||'CUSTOM').toUpperCase())} PROJECT · ${esc(p.time||'YOUR PACE')}</span><h1>${p.icon||'💻'} ${esc(p.title)}</h1><p>${esc(p.desc||'Your own Python project.')}</p><div class="code-unlocked"><div><b>Reference code · always unlocked</b><span>You can view this code at any level.</span></div><button id="copy-project-code" class="small-btn">Copy code</button></div><pre id="project-code" class="modal-code project-code">${esc(p.code||'# Add your Python code here')}</pre><div class="practice-bar"><div><b>Use VS Code to practice!</b><span>Paste the code into a .py file, run it, then change something.</span></div><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Download VS Code ↗</a></div>${concepts?`<h2>Learn only what this project needs</h2><div class="project-concepts">${concepts}</div>`:''}<h2>Build plan</h2><ol class="project-steps">${(p.steps||['Plan what the project should do.','Write the Python code.','Run it in VS Code.','Fix any errors and improve it.']).map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h2>Project check</h2>${done?'<div class="reward-callout"><span>✅</span><div><b>Project completed</b><span>You passed the project check.</span></div></div>':`<div class="exam-box"><h3>${esc(check.q)}</h3><div class="answer-list">${check.a.map((a,n)=>`<button class="project-answer answer-option" data-project-answer="${n}">${esc(a)}</button>`).join('')}</div><p id="project-check-result" class="exam-result">You cannot complete the project until you pass this check.</p></div>`}`);
    $$('[data-lesson]').forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.lesson)));
    const copy=$('#copy-project-code'); if(copy)copy.onclick=async()=>{try{await navigator.clipboard.writeText(p.code||'');toast('Project code copied');}catch(e){toast('Select the code and copy it manually');}};
    if(!done) $$('.project-answer').forEach(b=>b.onclick=()=>{const result=$('#project-check-result');if(Number(b.dataset.projectAnswer)===check.c){result.textContent='✅ Passed. Project completed!';result.className='exam-result correct';completeProject(p);setTimeout(()=>{closeModal();renderAll();toast('Project completed! +60 XP');},500);}else{result.textContent='Not yet. Review the code and try again.';result.className='exam-result wrong';}});
  }
  function completeProject(p){if(state.completedProjects.includes(p.id))return;state.completedProjects.push(p.id);state.xp+=60;const idx=Math.max(0,allProjects().findIndex(x=>x.id===p.id));const reward=rewardTrack[(lessons.length+idx)%rewardTrack.length],key=`${reward.type}:${reward.value}`;if(!state.unlocked.includes(key))state.unlocked.push(key);state.unlockHistory.push(reward);store.save();}

  function openCreateProject(){
    openModal(`<span class="kicker">MY PROJECT</span><h1>Create a Python project</h1><p>Create your own project card and keep your code inside PYN. This local prototype saves it in this browser.</p><div class="video-form"><label>Project name</label><input id="new-project-title" placeholder="e.g. My Study Timer"><label>Description</label><input id="new-project-desc" placeholder="What will it do?"><label>Level</label><select id="new-project-level"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select><label>Python code</label><textarea id="new-project-code" class="code-textarea" placeholder="# Start coding here\nprint(\"Hello!\")"></textarea><button id="save-project" class="primary-btn wide" style="margin-top:14px">Create project</button></div>`);
    $('#save-project').onclick=()=>{const title=$('#new-project-title').value.trim(),code=$('#new-project-code').value.trim();if(!title){$('#new-project-title').focus();return;}if(code.length<3){toast('Add some Python code first.');return;}state.userProjects.push({id:'mine-'+Date.now(),title,icon:'💻',level:$('#new-project-level').value,time:'Your pace',color:'linear-gradient(135deg,var(--accent),#111827)',desc:$('#new-project-desc').value.trim()||'My own Python project',concepts:[],steps:['Plan what it should do.','Write and run the code.','Fix errors.','Make it your own.'],code,userMade:true});store.save();closeModal();renderAll();go('projects');toast('Project created');};
  }

  function openPerson(id){const p=people.find(x=>x.id===id);if(!p)return;const bandOk=sameBand(state.age,p.age),isFriend=state.friends.includes(id),sent=state.sentRequests.includes(id);openModal(`<div class="friend-profile">${avatarHTML(p.avatar,'large-stage',p.active)}<div><span class="kicker">PYN LEARNER</span><h1>${esc(p.name)}</h1><p>${esc(p.status||'Learner')} · ${ageBand(p.age)} group</p><button id="friend-action" class="primary-btn wide" ${(!bandOk||isFriend||sent)?'disabled':''}>${isFriend?'Friends ✓':sent?'Request sent ✓':bandOk?'Send friend request':'Different age group'}</button></div></div>`);const b=$('#friend-action');if(b&&!b.disabled)b.onclick=()=>{state.sentRequests.push(id);store.save();b.textContent='Request sent ✓';b.disabled=true;toast('Friend request sent');};}
  function openVideo(vId){const v=currentVideos().find(x=>String(x.id)===String(vId));if(!v)return;openModal(`<span class="kicker">${esc(v.type||'VIDEO')}</span><h1>${esc(v.title)}</h1><div class="video-thumb video-large"><span class="play-circle">▶</span><span class="video-duration">${esc(v.duration||'2:30')}</span></div><p><b>Teacher:</b> ${esc(v.teacher||'PYN')}<br><b>Topic:</b> ${esc(v.lesson||'Python')}</p><p>This is a safe placeholder in the MVP. A production version can embed approved learning videos after moderation and rights checks.</p>`);}
  function openVideoForm(){openModal(`<span class="kicker">COMMUNITY TEACHING</span><h1>Share a mini lesson</h1><p>Real user uploads would be reviewed before becoming public.</p><div class="video-form"><label>Video title</label><input id="new-video-title" placeholder="e.g. Lists explained simply"><label>Python topic</label><select id="new-video-topic">${lessons.map(l=>`<option>${esc(l.title)}</option>`).join('')}</select><label>Video link</label><input id="new-video-link" placeholder="YouTube or approved video link"><label>What will you explain?</label><textarea id="new-video-desc" placeholder="Describe the mini lesson..."></textarea><button id="submit-video" class="primary-btn wide" style="margin-top:14px">Submit for review</button></div>`);$('#submit-video').onclick=()=>{const title=$('#new-video-title').value.trim();if(!title){$('#new-video-title').focus();return;}state.communityVideos.push({id:'user-'+Date.now(),title,teacher:state.username,lesson:$('#new-video-topic').value,duration:'Video',type:'Pending community submission',url:$('#new-video-link').value.trim()});store.save();closeModal();communityTab='videos';renderCommunity();renderHome();toast('Submitted to the prototype review queue');};}

  function bindDynamic(){
    $$('[data-project]').forEach(el=>el.onclick=()=>openProject(Number(el.dataset.project)));
    $$('[data-lesson]').forEach(el=>el.onclick=()=>openLesson(Number(el.dataset.lesson)));
    $$('[data-person]').forEach(el=>el.onclick=()=>openPerson(el.dataset.person));
    $$('[data-video]').forEach(el=>el.onclick=()=>openVideo(el.dataset.video));
  }
  function go(page){$$('.page').forEach(p=>p.classList.toggle('active-page',p.id===page));$$('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));window.scrollTo({top:0,behavior:'smooth'});if(page==='profile')renderProfile();if(page==='community')renderCommunity();}

  function setupEvents(){
    $$('[data-auth-gender]').forEach(b=>b.addEventListener('click',()=>{authGender=b.dataset.authGender;$$('[data-auth-gender]').forEach(x=>x.classList.toggle('active',x===b));}));
    $$('[data-page]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
    $$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);}));
    $$('.subtab').forEach(b=>b.addEventListener('click',()=>{communityTab=b.dataset.community;renderCommunityTab();}));
    $('#modal-close').onclick=closeModal; $('#modal').onclick=e=>{if(e.target.id==='modal')closeModal();};
    $('#upload-video-btn').onclick=openVideoForm; $('#create-project-btn').onclick=openCreateProject;
    $('#save-profile-btn').onclick=()=>{const n=$('#display-name-input').value.trim();if(n)state.username=n;store.save();renderAll();toast('Profile saved');};
    $('#signout-btn').onclick=()=>{store.setStarted(false);location.reload();};
    $('#start-btn').onclick=()=>{const name=$('#username-input').value.trim(),age=Number($('#age-input').value);if(!name){$('#username-input').focus();return;}if(!Number.isFinite(age)||age<9){toast('PYN prototype accounts start at age 9.');$('#age-input').focus();return;}state.username=name;state.age=age;state.avatar.gender=authGender;store.save();store.setStarted(true);showApp();renderAll();};
    $('#demo-btn').onclick=()=>{state.username='PixelCoder';state.age=13;state.avatar.gender='female';store.save();store.setStarted(true);showApp();renderAll();};
  }
  function showApp(){$('#auth-screen').classList.add('hidden');$('#app').classList.remove('hidden');}
  applyTheme(); setupEvents(); if(store.started())showApp(); renderAll();
})();
