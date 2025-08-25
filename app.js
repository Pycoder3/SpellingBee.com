class SpellingBeePro {
     
    constructor() {
        this.wordBanks = {

            easy: this.generateWordLevels([
                { word: "apple", definition: "A round fruit with red, green, or yellow skin", sentence: "I eat an apple every morning." },
                { word: "book", definition: "A written or printed work consisting of pages", sentence: "She is reading a book." },
                { word: "cat", definition: "A small furry animal often kept as a pet", sentence: "The cat sat on the mat." },
                { word: "dog", definition: "A domesticated animal that barks", sentence: "The dog chased the ball." },
                { word: "sun", definition: "The star that gives Earth light and heat", sentence: "The sun is bright today." },
                { word: "hat", definition: "A covering for the head", sentence: "He wore a red hat." },
                { word: "pen", definition: "A tool used for writing with ink", sentence: "She wrote with a blue pen." },
                { word: "cup", definition: "A small container for drinking", sentence: "He filled the cup with water." },
                { word: "bed", definition: "A piece of furniture for sleeping", sentence: "She went to bed early." },
                { word: "run", definition: "To move quickly on foot", sentence: "He likes to run in the park." },
                { word: "big", definition: "Large in size", sentence: "The elephant is big." },
                { word: "red", definition: "A color like blood", sentence: "The car is red." },
                { word: "hot", definition: "Having a high temperature", sentence: "The soup is too hot." },
                { word: "sit", definition: "To rest on the lower body", sentence: "Please sit down." },
                { word: "top", definition: "The highest part of something", sentence: "The toy is on top of the shelf." },
                { word: "leg", definition: "A limb used for standing and walking", sentence: "He hurt his leg." },
                { word: "arm", definition: "A limb used for holding things", sentence: "She raised her arm." },
                { word: "box", definition: "A container with straight sides", sentence: "The gift is in the box." },
                { word: "key", definition: "A tool used to open locks", sentence: "She lost her house key." },
                { word: "egg", definition: "A food laid by birds", sentence: "She ate a boiled egg." },
                { word: "car", definition: "A vehicle with wheels", sentence: "They drove the car to work." },
                { word: "bus", definition: "A large vehicle that carries passengers", sentence: "He takes the bus to school." },
                { word: "toy", definition: "An object for children to play with", sentence: "The child loves his toy car." },
                { word: "map", definition: "A drawing of an area's geography", sentence: "We used a map to navigate." },
                { word: "fan", definition: "A device that moves air", sentence: "The fan keeps the room cool." },
                { word: "lip", definition: "The soft edge of the mouth", sentence: "She bit her lip." },
                { word: "jam", definition: "A sweet spread made from fruit", sentence: "He put jam on his toast." },
                { word: "nut", definition: "A hard-shelled seed", sentence: "The squirrel ate a nut." },
                { word: "ant", definition: "A small insect that lives in colonies", sentence: "An ant crawled on the ground." },
                { word: "ice", definition: "Frozen water", sentence: "She put ice in her drink." },
                { word: "mud", definition: "Wet, soft earth", sentence: "The kids played in the mud." },
                { word: "sky", definition: "The space above the Earth", sentence: "The sky is blue today." },
                { word: "sea", definition: "A large body of saltwater", sentence: "They sailed on the sea." },
                { word: "zoo", definition: "A place where animals are kept for display", sentence: "We saw lions at the zoo." },
                { word: "owl", definition: "A nocturnal bird", sentence: "The owl hooted at night." },
                { word: "bat", definition: "A flying mammal or a sports tool", sentence: "The bat flew in the dark." },
                { word: "cow", definition: "A farm animal that gives milk", sentence: "The cow eats grass." },
                { word: "pig", definition: "A farm animal with a snout", sentence: "The pig rolled in the mud." },
                { word: "fox", definition: "A wild animal with a bushy tail", sentence: "The fox ran across the field." },
                { word: "bee", definition: "A flying insect that makes honey", sentence: "The bee landed on the flower." },
                { word: "bug", definition: "A small insect", sentence: "A bug crawled on the leaf." },
                { word: "rat", definition: "A small rodent", sentence: "The rat hid in the hole." },
                { word: "hen", definition: "A female chicken", sentence: "The hen laid an egg." },
                { word: "duck", definition: "A waterbird with a flat bill", sentence: "The duck swam in the pond." },
                { word: "frog", definition: "A small jumping amphibian", sentence: "The frog croaked loudly." },
                { word: "fish", definition: "An animal that lives in water", sentence: "He caught a big fish." },
                { word: "bird", definition: "A feathered animal that flies", sentence: "A bird sang in the tree." },
                { word: "tree", definition: "A tall plant with a trunk and branches", sentence: "The tree has green leaves." },
                { word: "leaf", definition: "A flat part of a plant", sentence: "A leaf fell from the tree." },
                { word: "rose", definition: "A fragrant flower with thorns", sentence: "She gave me a red rose." },
                { word: "grass", definition: "Green plants that cover the ground", sentence: "The grass is wet with dew." },
                { word: "rain", definition: "Water that falls from clouds", sentence: "The rain made the ground wet." },
                { word: "snow", definition: "Frozen rain that falls in flakes", sentence: "The snow covered the street." },
                { word: "wind", definition: "Moving air", sentence: "The wind blew the leaves." },
                { word: "star", definition: "A bright point in the night sky", sentence: "We saw a shooting star." },
                { word: "moon", definition: "Earth's natural satellite", sentence: "The moon was full last night." },
                { word: "rock", definition: "A hard natural material", sentence: "He threw a rock into the lake." },
                { word: "sand", definition: "Tiny grains of eroded rock", sentence: "The sand was warm underfoot." },
                { word: "hill", definition: "A small raised area of land", sentence: "They climbed the hill." },
                { word: "lake", definition: "A large body of freshwater", sentence: "We swam in the lake." },
                { word: "river", definition: "A flowing body of water", sentence: "The river runs through the valley." },
                { word: "road", definition: "A paved way for vehicles", sentence: "The road was long and straight." },
                { word: "house", definition: "A building where people live", sentence: "They bought a new house." },
                { word: "door", definition: "An entryway to a room or building", sentence: "She knocked on the door." },
                { word: "wall", definition: "A vertical structure that divides space", sentence: "He hung a picture on the wall." },
                { word: "roof", definition: "The top covering of a building", sentence: "The roof was covered in snow." },
                { word: "desk", definition: "A table used for work or study", sentence: "She put her books on the desk." },
                { word: "lamp", definition: "A device that produces light", sentence: "He turned on the lamp." },
                { word: "sofa", definition: "A long, soft seat for multiple people", sentence: "They sat on the sofa." },
                { word: "fork", definition: "A utensil with prongs for eating", sentence: "She used a fork to eat pasta." },
                { word: "spoon", definition: "A utensil with a shallow bowl for eating", sentence: "He stirred his coffee with a spoon." },
                { word: "knife", definition: "A sharp tool for cutting", sentence: "She cut the bread with a knife." },
                { word: "plate", definition: "A flat dish for serving food", sentence: "He put the sandwich on a plate." },
                { word: "bowl", definition: "A deep dish for holding food", sentence: "She ate cereal from a bowl." },
                { word: "clock", definition: "A device that shows time", sentence: "The clock on the wall ticked loudly." },
                { word: "watch", definition: "A small timepiece worn on the wrist", sentence: "He checked his watch for the time." },
                { word: "phone", definition: "A device for communication", sentence: "She called her friend on the phone." },
                { word: "light", definition: "The natural agent that makes things visible", sentence: "Turn on the light, please." },
                { word: "dark", definition: "The absence of light", sentence: "The room was dark at night." },
                { word: "cold", definition: "Low in temperature", sentence: "The water was too cold to swim." },
                { word: "warm", definition: "Moderately hot", sentence: "The soup was warm and tasty." },
                { word: "soft", definition: "Easy to bend or press", sentence: "The blanket was very soft." },
                { word: "hard", definition: "Solid and firm to the touch", sentence: "The rock was hard." },
                { word: "fast", definition: "Moving quickly", sentence: "The rabbit runs fast." },
                { word: "slow", definition: "Moving at a low speed", sentence: "The turtle walks slow." },
                { word: "high", definition: "Far above the ground", sentence: "The plane flew high in the sky." },
                { word: "low", definition: "Close to the ground", sentence: "The chair was too low for the table." },
                { word: "long", definition: "Extending far in length", sentence: "The rope was very long." },
                { word: "short", definition: "Small in length or height", sentence: "She has short hair." },
                { word: "wide", definition: "Extending far from side to side", sentence: "The river was wide." },
                { word: "narrow", definition: "Small in width", sentence: "The path was narrow." },
                { word: "happy", definition: "Feeling joy", sentence: "She was happy to see her friend." },
                { word: "sad", definition: "Feeling sorrow", sentence: "He was sad when his pet ran away." },
                { word: "good", definition: "Of high quality", sentence: "She got a good grade on her test." },
                { word: "bad", definition: "Of poor quality", sentence: "The milk smelled bad." },
                { word: "new", definition: "Recently made or obtained", sentence: "He bought a new bike." },
                { word: "old", definition: "Having existed for a long time", sentence: "The house was very old." },
                { word: "clean", definition: "Free from dirt", sentence: "She kept her room clean." },
                { word: "dirty", definition: "Covered with marks or stains", sentence: "His shoes were dirty after the hike." },
                { word: "wet", definition: "Covered with liquid", sentence: "The towel was wet." },
                { word: "dry", definition: "Free from moisture", sentence: "The clothes were dry after hanging in the sun." },
                { word: "full", definition: "Containing as much as possible", sentence: "The glass was full of water." },
                { word: "empty", definition: "Containing nothing", sentence: "The box was empty." },
                { word: "open", definition: "Not closed or blocked", sentence: "The door was left open." },
                { word: "closed", definition: "Not open", sentence: "The store was closed on Sunday." },
                { word: "loud", definition: "Producing much noise", sentence: "The music was too loud." },
                { word: "quiet", definition: "Making little noise", sentence: "The library was very quiet." },
                { word: "heavy", definition: "Of great weight", sentence: "The bag was too heavy to carry." },
                { word: "light", definition: "Of little weight", sentence: "The feather was very light." },
                { word: "right", definition: "Correct or opposite of left", sentence: "Turn right at the next street." },
                { word: "wrong", definition: "Incorrect", sentence: "His answer was wrong." },
                { word: "easy", definition: "Not difficult", sentence: "The puzzle was easy to solve." },
                { word: "hard", definition: "Difficult", sentence: "The math problem was hard." },
                { word: "fun", definition: "Enjoyable", sentence: "The party was so much fun." },
                { word: "boring", definition: "Not interesting", sentence: "The lecture was boring." },
                { word: "kind", definition: "Friendly and generous", sentence: "She is a kind person." },
                { word: "mean", definition: "Unkind or cruel", sentence: "The bully was mean to others." },
                { word: "rich", definition: "Having a lot of money", sentence: "The man was very rich." },
                { word: "poor", definition: "Lacking money", sentence: "The family was poor but happy." },
                { word: "tall", definition: "Of great height", sentence: "The basketball player was very tall." },
                { word: "short", definition: "Of little height", sentence: "The child was too short to ride." },
                { word: "fat", definition: "Having excess body weight", sentence: "The cat was fat from eating too much." },
                { word: "thin", definition: "Having little body fat", sentence: "The model was very thin." },
                { word: "young", definition: "Not old", sentence: "The puppy was still young." },
                { word: "old", definition: "Having lived for many years", sentence: "The old man told stories." },
                { word: "strong", definition: "Having great power", sentence: "He was strong enough to lift the box." },
                { word: "weak", definition: "Lacking strength", sentence: "She felt weak after being sick." },
                { word: "sweet", definition: "Having a sugary taste", sentence: "The candy was very sweet." },
                { word: "sour", definition: "Having a sharp taste", sentence: "The lemon was too sour." },
                { word: "bitter", definition: "Having a harsh taste", sentence: "The medicine tasted bitter." },
                { word: "salty", definition: "Containing salt", sentence: "The soup was too salty." },
                { word: "spicy", definition: "Having a hot flavor", sentence: "The curry was very spicy." },
                { word: "fresh", definition: "Recently made or harvested", sentence: "The bread was fresh from the oven." },
                { word: "stale", definition: "No longer fresh", sentence: "The chips were stale." },
                { word: "raw", definition: "Not cooked", sentence: "He ate raw vegetables." },
                { word: "cooked", definition: "Prepared by heating", sentence: "The chicken was fully cooked." },
                { word: "hot", definition: "Having a high temperature", sentence: "The tea was too hot to drink." },
                { word: "warm", definition: "Pleasantly hot", sentence: "The blanket kept her warm." },
                { word: "cool", definition: "Slightly cold", sentence: "The breeze was cool." },
                { word: "nice", definition: "Pleasant or kind", sentence: "She gave a nice smile." },
                { word: "rude", definition: "Not polite", sentence: "His comment was rude." },
                { word: "smart", definition: "Intelligent", sentence: "The student was very smart." },
                { word: "dumb", definition: "Lacking intelligence", sentence: "That was a dumb mistake." },
                { word: "brave", definition: "Showing courage", sentence: "The firefighter was brave." },
                { word: "scared", definition: "Feeling fear", sentence: "She was scared of the dark." },
                { word: "safe", definition: "Free from danger", sentence: "The children were safe at home." },
                { word: "danger", definition: "Risk of harm", sentence: "The sign warned of danger." },
                { word: "love", definition: "A strong feeling of affection", sentence: "They shared a bond of love." },
                { word: "hate", definition: "A strong feeling of dislike", sentence: "He hated broccoli." },
                { word: "hope", definition: "A feeling of expectation", sentence: "She had hope for the future." },
                { word: "fear", definition: "An unpleasant emotion caused by threat", sentence: "He felt fear in the dark alley." },
                { word: "joy", definition: "A feeling of great happiness", sentence: "The news brought her joy." },
                { word: "pain", definition: "Physical suffering", sentence: "He felt pain in his knee." },
                { word: "work", definition: "Activity involving mental or physical effort", sentence: "She went to work early." },
                { word: "play", definition: "Engage in activity for enjoyment", sentence: "The kids play outside." },
                { word: "rest", definition: "Cease work to relax", sentence: "He needed to rest after running." },
                { word: "sleep", definition: "A natural state of rest", sentence: "She went to sleep at 10 PM." },
                { word: "wake", definition: "Stop sleeping", sentence: "He woke up early." },
                { word: "eat", definition: "Put food in the mouth", sentence: "They eat dinner at 7 PM." },
                { word: "drink", definition: "Take liquid into the body", sentence: "She drank a glass of water." },
                { word: "cook", definition: "Prepare food by heating", sentence: "He likes to cook pasta." },
                { word: "bake", definition: "Cook in an oven", sentence: "She baked a cake." },
                { word: "sing", definition: "Make musical sounds with the voice", sentence: "They sang a song together." },
                { word: "dance", definition: "Move rhythmically to music", sentence: "She loves to dance." },
                { word: "draw", definition: "Make a picture with a pencil", sentence: "He can draw very well." },
                { word: "write", definition: "Mark letters or words on paper", sentence: "She writes in her journal daily." },
                { word: "read", definition: "Look at and understand written words", sentence: "He reads a book every week." },
                { word: "talk", definition: "Speak to someone", sentence: "They talked for hours." },
                { word: "walk", definition: "Move on foot", sentence: "She walks to school." },
                { word: "jump", definition: "Push oneself off the ground", sentence: "The kids jump on the trampoline." },
                { word: "swim", definition: "Move through water", sentence: "They swim in the pool." },
                { word: "fly", definition: "Move through the air", sentence: "Birds fly south for winter." },
                { word: "drive", definition: "Operate a vehicle", sentence: "He drives to work." },
                { word: "ride", definition: "Sit on and control a vehicle or animal", sentence: "She rides her bike to the park." },
                { word: "give", definition: "Hand something to someone", sentence: "He gave her a gift." },
                { word: "take", definition: "Lay hold of something", sentence: "She took the book from the shelf." },
                { word: "buy", definition: "Obtain something by paying", sentence: "They bought a new car." },
                { word: "pay", definition: "Give money for goods or services", sentence: "She paid for the groceries." },
                { word: "find", definition: "Discover something", sentence: "He found his lost keys." },
                { word: "lose", definition: "Be unable to find something", sentence: "She lost her wallet." },
                { word: "keep", definition: "Retain possession of something", sentence: "He keeps his room tidy." },
                { word: "throw", definition: "Propel something through the air", sentence: "She threw the ball." },
                { word: "catch", definition: "Intercept and hold something", sentence: "He caught the frisbee." },
                { word: "kick", definition: "Strike with the foot", sentence: "She kicked the soccer ball." },
                { word: "hit", definition: "Bring one's hand or object into contact with something", sentence: "He hit the nail with a hammer." },
                { word: "break", definition: "Separate into pieces", sentence: "She accidentally broke the vase." },
                { word: "fix", definition: "Repair something", sentence: "He fixed the broken chair." },
                { word: "cut", definition: "Divide with a sharp tool", sentence: "She cut the paper with scissors." },
                { word: "tie", definition: "Fasten with a knot", sentence: "He tied his shoelaces." },
                { word: "wear", definition: "Have clothing on the body", sentence: "She wears a blue dress." },
                { word: "wash", definition: "Clean with water and soap", sentence: "He washes his hands before eating." },
                { word: "dry", definition: "Remove moisture", sentence: "She dried her hair with a towel." },
                { word: "brush", definition: "Clean with a brush", sentence: "He brushes his teeth twice a day." },
                { word: "comb", definition: "Arrange hair with a toothed tool", sentence: "She combed her long hair." },
                { word: "smile", definition: "Form one's mouth into a pleased expression", sentence: "He smiled at the joke." },
                { word: "laugh", definition: "Make sounds of amusement", sentence: "She laughed at the funny movie." },
                { word: "cry", definition: "Shed tears", sentence: "The baby cried for milk." },
                { word: "shout", definition: "Speak loudly", sentence: "He shouted to get attention." },
                { word: "whisper", definition: "Speak very softly", sentence: "She whispered a secret." },
                { word: "listen", definition: "Give attention to sound", sentence: "He listens to music every day." },
                { word: "wrong", definition: "Not correct", sentence: "His answer was wrong." },], 20),


            medium: this.generateWordLevels([
            { word: "computer", definition: "An electronic device for processing data", sentence: "I use my computer every day." },
            { word: "library", definition: "A place where books are kept", sentence: "We visited the school library." },
            { word: "abrupt", definition: "Sudden and unexpected", sentence: "The meeting came to an abrupt end." },
            { word: "absurd", definition: "Extremely silly or ridiculous", sentence: "The idea was utterly absurd." },
            { word: "accomplish", definition: "To achieve or complete successfully", sentence: "She worked hard to accomplish her goals." },
            { word: "accurate", definition: "Correct in all details", sentence: "His report was highly accurate." },
            { word: "adequate", definition: "Enough for a specific need", sentence: "The supplies were barely adequate." },
            { word: "aggressive", definition: "Ready to confront or attack", sentence: "The dog became aggressive." },
            { word: "ambition", definition: "A strong desire to achieve something", sentence: "His ambition drove him to succeed." },
            { word: "ancient", definition: "Belonging to the very distant past", sentence: "They studied ancient civilizations." },
            { word: "anxious", definition: "Experiencing worry or unease", sentence: "She felt anxious before the test." },
            { word: "apparent", definition: "Clearly visible or understood", sentence: "His guilt was apparent." },
            { word: "approach", definition: "To come near or nearer to", sentence: "The cat approached cautiously." },
            { word: "approval", definition: "Acceptance or agreement", sentence: "He nodded in approval." },
            { word: "argument", definition: "A disagreement or debate", sentence: "They had a heated argument." },
            { word: "astonish", definition: "To surprise or shock greatly", sentence: "The news will astonish you." },
            { word: "attempt", definition: "To make an effort to do something", sentence: "She attempted to solve the puzzle." },
            { word: "attitude", definition: "A settled way of thinking", sentence: "His positive attitude helped the team." },
            { word: "attract", definition: "To draw interest or attention", sentence: "Bright colors attract bees." },
            { word: "awkward", definition: "Lacking grace or causing discomfort", sentence: "The silence was awkward." },
            { word: "barrier", definition: "An obstacle that blocks progress", sentence: "The wall acted as a barrier." },
            { word: "benefit", definition: "An advantage or profit", sentence: "Exercise has many health benefits." },
            { word: "brilliant", definition: "Exceptionally clever or talented", sentence: "She gave a brilliant performance." },
            { word: "calculate", definition: "To determine mathematically", sentence: "He calculated the total cost." },
            { word: "capable", definition: "Having the ability to do something", sentence: "She is capable of great things." },
            { word: "capture", definition: "To take into one's possession", sentence: "The photo captured the moment perfectly." },
            { word: "career", definition: "A person's professional journey", sentence: "He pursued a career in medicine." },
            { word: "caution", definition: "Care to avoid danger", sentence: "She proceeded with caution." },
            { word: "challenge", definition: "A difficult task or situation", sentence: "The hike was a real challenge." },
            { word: "character", definition: "Moral qualities of a person", sentence: "Honesty is part of his character." },
            { word: "circular", definition: "Shaped like a circle", sentence: "The table was perfectly circular." },
            { word: "civilize", definition: "To bring out of a primitive state", sentence: "Education helps civilize society." },
            { word: "combine", definition: "To merge or mix together", sentence: "Combine the ingredients gently." },
            { word: "comfort", definition: "A state of physical ease", sentence: "The soft chair gave her comfort." },
            { word: "comment", definition: "A remark or observation", sentence: "He made a sarcastic comment." },
            { word: "compare", definition: "To examine similarities/differences", sentence: "Compare the two versions carefully." },
            { word: "compete", definition: "To strive against others", sentence: "Athletes compete for medals." },
            { word: "complain", definition: "To express dissatisfaction", sentence: "She complained about the noise." },
            { word: "complete", definition: "To finish or make whole", sentence: "He completed the assignment on time." },
            { word: "complex", definition: "Consisting of many parts", sentence: "The machine was complex." },
            { word: "concern", definition: "Worry or interest in something", sentence: "Pollution is a global concern." },
            { word: "confuse", definition: "To make unclear or bewildered", sentence: "The instructions confused him." },
            { word: "consider", definition: "To think carefully about", sentence: "Consider all your options." },
            { word: "consume", definition: "To eat, drink, or use up", sentence: "The fire consumed the building." },
            { word: "contact", definition: "Communication or touching", sentence: "Avoid contact with the chemical." },
            { word: "continue", definition: "To keep going without stopping", sentence: "The rain continued all day." },
            { word: "contrast", definition: "Difference between things", sentence: "The contrast was striking." },
            { word: "convince", definition: "To persuade someone", sentence: "She convinced him to apologize." },
            { word: "cooperate", definition: "To work together", sentence: "Teams must cooperate to win." },
            { word: "correct", definition: "Free from error", sentence: "Her answer was correct." },
            { word: "courage", definition: "Bravery in facing fear", sentence: "He showed great courage." },
            { word: "creative", definition: "Having imagination or originality", sentence: "She is a creative writer." },
            { word: "creature", definition: "A living being", sentence: "The forest was full of creatures." },
            { word: "critical", definition: "Expressing disapproval or key importance", sentence: "The review was highly critical." },
            { word: "culture", definition: "Customs of a society", sentence: "They studied Japanese culture." },
            { word: "curious", definition: "Eager to know or learn", sentence: "The child was curious about stars." },
            { word: "dangerous", definition: "Likely to cause harm", sentence: "The icy road was dangerous." },
            { word: "decision", definition: "A conclusion or resolution", sentence: "Making a decision was hard." },
            { word: "decrease", definition: "To become smaller or fewer", sentence: "Sales decreased this month." },
            { word: "delicate", definition: "Easily broken or fragile", sentence: "Handle the glass with delicate care." },
            { word: "deliver", definition: "To bring to a destination", sentence: "The mail was delivered late." },
            { word: "describe", definition: "To give an account in words", sentence: "Can you describe the suspect?" },
            { word: "deserve", definition: "To be worthy of something", sentence: "They deserve a reward." },
            { word: "desperate", definition: "Feeling hopeless", sentence: "He was desperate for help." },
            { word: "destroy", definition: "To put an end to something", sentence: "The storm destroyed the house." },
            { word: "determine", definition: "To decide or conclude", sentence: "She determined the cause." },
            { word: "develop", definition: "To grow or progress", sentence: "The child developed quickly." },
            { word: "diamond", definition: "A precious gemstone", sentence: "Her ring had a diamond." },
            { word: "difficult", definition: "Requiring effort or skill", sentence: "The puzzle was difficult." },
            { word: "disagree", definition: "To have a different opinion", sentence: "They disagree on politics." },
            { word: "disappear", definition: "To vanish from sight", sentence: "The magician made it disappear." },
            { word: "disaster", definition: "A sudden event causing great damage", sentence: "The earthquake was a disaster." },
            { word: "discover", definition: "To find something unknown", sentence: "Scientists discovered a new planet." },
            { word: "discuss", definition: "To talk about something", sentence: "They discussed the plan." },
            { word: "distance", definition: "The amount of space between things", sentence: "The distance was five miles." },
            { word: "disturb", definition: "To interrupt or bother", sentence: "Don’t disturb the baby." },
            { word: "doubtful", definition: "Uncertain or unlikely", sentence: "The outcome seemed doubtful." },
            { word: "dramatic", definition: "Sudden or striking", sentence: "Her reaction was dramatic." },
            { word: "eager", definition: "Strongly wanting to do something", sentence: "He was eager to learn." },
            { word: "economy", definition: "The wealth of a country", sentence: "The economy is growing." },
            { word: "educate", definition: "To teach or train", sentence: "Schools educate children." },
            { word: "effect", definition: "A change caused by something", sentence: "The medicine had no effect." },
            { word: "efficient", definition: "Achieving maximum productivity", sentence: "The system was efficient." },
            { word: "effort", definition: "Physical or mental exertion", sentence: "She put effort into her work." },
            { word: "elastic", definition: "Able to stretch and return", sentence: "The rubber band was elastic." },
            { word: "elegant", definition: "Graceful and stylish", sentence: "She wore an elegant dress." },
            { word: "embarrass", definition: "To cause self-consciousness", sentence: "He embarrassed his sister." },
            { word: "emotion", definition: "A strong feeling", sentence: "Her face showed emotion." },
            { word: "emphasize", definition: "To give special importance", sentence: "He emphasized the rules." },
            { word: "encourage", definition: "To give support or confidence", sentence: "She encouraged her friend." },
            { word: "enormous", definition: "Very large in size", sentence: "The elephant was enormous." },
            { word: "entire", definition: "Whole or complete", sentence: "He ate the entire pizza." },
            { word: "entrance", definition: "A point of entry", sentence: "The entrance was crowded." },
            { word: "envelope", definition: "A paper container for letters", sentence: "She sealed the envelope." },
            { word: "environment", definition: "Natural surroundings", sentence: "Protect the environment." },
            { word: "equal", definition: "Being the same in quantity or value", sentence: "All people are equal." },
            { word: "equipment", definition: "Tools needed for a purpose", sentence: "The lab had new equipment." },
            { word: "essential", definition: "Absolutely necessary", sentence: "Water is essential for life." },
            { word: "estimate", definition: "To roughly calculate", sentence: "He estimated the cost." },
            { word: "evidence", definition: "Facts indicating truth", sentence: "The evidence was clear." },
            { word: "exact", definition: "Precise or accurate", sentence: "She knew the exact time." },
            { word: "examine", definition: "To inspect closely", sentence: "The doctor examined her." },
            { word: "example", definition: "A representative instance", sentence: "Follow her example." },
            { word: "excellent", definition: "Extremely good", sentence: "The food was excellent." },
            { word: "exchange", definition: "To give and receive", sentence: "They exchanged gifts." },
            { word: "excitement", definition: "A feeling of enthusiasm", sentence: "The crowd buzzed with excitement." },
            { word: "exercise", definition: "Physical activity for health", sentence: "She does exercise daily." },
            { word: "exhaust", definition: "To drain of energy", sentence: "The hike exhausted him." },
            { word: "expand", definition: "To increase in size", sentence: "The business expanded." },
            { word: "expect", definition: "To regard as likely", sentence: "I expect rain tomorrow." },
            { word: "experience", definition: "Practical knowledge gained", sentence: "He has years of experience." },
            { word: "experiment", definition: "A scientific test", sentence: "They conducted an experiment." },
            { word: "explain", definition: "To make clear or understandable", sentence: "She explained the rules." },
            { word: "explode", definition: "To burst violently", sentence: "The bomb could explode." },
            { word: "express", definition: "To convey in words", sentence: "He expressed his opinion." },
            { word: "extend", definition: "To stretch out", sentence: "She extended her arm." },
            { word: "extra", definition: "More than usual", sentence: "He paid extra for speed." },
            { word: "extraordinary", definition: "Remarkable or unusual", sentence: "Her talent was extraordinary." },
            { word: "extreme", definition: "Reaching a high degree", sentence: "The weather was extreme." },
            { word: "familiar", definition: "Well known or recognized", sentence: "The song sounded familiar." },
            { word: "famous", definition: "Known by many people", sentence: "The actor was famous." },
            { word: "fancy", definition: "Elaborate or decorative", sentence: "She wore a fancy hat." },
            { word: "fantastic", definition: "Extraordinarily good", sentence: "The view was fantastic." },
            { word: "fascinate", definition: "To attract intensely", sentence: "Science fascinated him." },
            { word: "fatal", definition: "Causing death", sentence: "The accident was fatal." },
            { word: "favorite", definition: "Preferred above others", sentence: "Pizza is her favorite food." },
            { word: "fierce", definition: "Violent or aggressive", sentence: "The tiger was fierce." },
            { word: "flexible", definition: "Capable of bending easily", sentence: "The material was flexible." },
            { word: "flourish", definition: "To grow or thrive", sentence: "Plants flourish in sunlight." },
            { word: "forbid", definition: "To refuse to allow", sentence: "The sign forbids parking." },
            { word: "foreign", definition: "From another country", sentence: "She spoke a foreign language." },
            { word: "forgive", definition: "To stop feeling angry", sentence: "He forgave the mistake." },
            { word: "fortunate", definition: "Lucky or favored", sentence: "They were fortunate to escape." },
            { word: "frequent", definition: "Happening often", sentence: "He was a frequent visitor." },
            { word: "frighten", definition: "To scare or terrify", sentence: "The noise frightened her." },
            { word: "frustrate", definition: "To prevent from succeeding", sentence: "The puzzle frustrated him." },
            { word: "function", definition: "To work or operate", sentence: "The machine functions well." },
            { word: "generous", definition: "Willing to give", sentence: "She was generous with tips." },
            { word: "genius", definition: "Exceptional intelligence", sentence: "Einstein was a genius." },
            { word: "gigantic", definition: "Extremely large", sentence: "The dinosaur was gigantic." },
            { word: "glamorous", definition: "Attractive in an exciting way", sentence: "The actress was glamorous." },
            { word: "glorious", definition: "Having great beauty", sentence: "The sunset was glorious." },
            { word: "gorgeous", definition: "Beautiful or very attractive", sentence: "The garden was gorgeous." },
            { word: "graceful", definition: "Moving elegantly", sentence: "The dancer was graceful." },
            { word: "grateful", definition: "Feeling thankful", sentence: "She was grateful for help." },
            { word: "greedy", definition: "Excessively desirous", sentence: "The greedy man took more." },
            { word: "grief", definition: "Deep sorrow", sentence: "She felt grief after the loss." },
            { word: "guarantee", definition: "A promise or assurance", sentence: "The product has a guarantee." },
            { word: "guilty", definition: "Responsible for wrongdoing", sentence: "He felt guilty for lying." },
            { word: "handsome", definition: "Good-looking (typically for men)", sentence: "The actor was handsome." },
            { word: "happiness", definition: "The state of being happy", sentence: "Her happiness was contagious." },
            { word: "harmony", definition: "A pleasing arrangement", sentence: "The choir sang in harmony." },
            { word: "harsh", definition: "Unpleasantly rough", sentence: "The winter was harsh." },
            { word: "harvest", definition: "The gathering of crops", sentence: "Farmers celebrated the harvest." },
            { word: "hazard", definition: "A danger or risk", sentence: "The spill was a hazard." },
            { word: "honest", definition: "Free of deceit", sentence: "He gave an honest answer." },
            { word: "honor", definition: "High respect", sentence: "They fought for honor." },
            { word: "horizon", definition: "The line where earth meets sky", sentence: "The sun set on the horizon." },
            { word: "hostile", definition: "Unfriendly or aggressive", sentence: "The crowd grew hostile." },
            { word: "humble", definition: "Modest or unpretentious", sentence: "Despite fame, he stayed humble." },
            { word: "humorous", definition: "Funny or amusing", sentence: "The speech was humorous." },
            { word: "ideal", definition: "Perfect or most suitable", sentence: "It was an ideal solution." },
            { word: "identify", definition: "To recognize or name", sentence: "She identified the bird." },
            { word: "ignore", definition: "To refuse to notice", sentence: "He ignored the warning." },
            { word: "imagine", definition: "To form a mental picture", sentence: "Imagine a world at peace." },
            { word: "imitate", definition: "To copy or mimic", sentence: "The parrot imitated speech." },
            { word: "impact", definition: "A strong effect", sentence: "The news had a huge impact." },
            { word: "impress", definition: "To make someone admire", sentence: "Her skills impressed them." },
            { word: "improve", definition: "To make better", sentence: "He worked to improve." },
            { word: "include", definition: "To contain as part of a whole", sentence: "The price includes tax." },
            { word: "increase", definition: "To become greater", sentence: "Prices increased this year." },
            { word: "indicate", definition: "To point out or show", sentence: "The sign indicates left." },
            { word: "industry", definition: "Economic activity", sentence: "The city thrived on industry." },
            { word: "influence", definition: "The power to affect others", sentence: "Her words had influence." },
            { word: "inform", definition: "To give knowledge", sentence: "The letter informed them." },
            { word: "injure", definition: "To harm physically", sentence: "The fall injured his leg." },
            { word: "innocent", definition: "Not guilty", sentence: "The child was innocent." },
            { word: "insist", definition: "To demand firmly", sentence: "She insisted on paying." },
            { word: "inspire", definition: "To fill with motivation", sentence: "The coach inspired the team." },
            { word: "instant", definition: "Happening immediately", sentence: "He needed an instant reply." },
            { word: "intelligent", definition: "Having good understanding", sentence: "The student was intelligent." },
            { word: "intense", definition: "Extreme in degree", sentence: "The pain was intense." },
            { word: "intention", definition: "A plan or purpose", sentence: "Her intention was clear." },
            { word: "interest", definition: "A feeling of curiosity", sentence: "The topic sparked interest." },
            { word: "interrupt", definition: "To stop continuity", sentence: "He didn’t mean to interrupt." },
            { word: "invent", definition: "To create something new", sentence: "She invented a new gadget." },
            { word: "investigate", definition: "To examine closely", sentence: "They investigated the crime." },
            { word: "invite", definition: "To ask someone to join", sentence: "They invited us to dinner." },
            { word: "involve", definition: "To include as necessary", sentence: "The job involves travel." },
            { word: "isolate", definition: "To set apart from others", sentence: "The sick were isolated." },
            { word: "jealous", definition: "Envious of others", sentence: "He was jealous of her success." },
            { word: "journal", definition: "A daily record of events", sentence: "She kept a travel journal." },
            { word: "justice", definition: "Fairness or moral rightness", sentence: "They fought for justice." },
            { word: "justify", definition: "To show to be right", sentence: "He justified his actions." },
            { word: "kingdom", definition: "A country ruled by a monarch", sentence: "The kingdom prospered." },
            { word: "knowledge", definition: "Facts or information learned", sentence: "Education increases knowledge." },
            { word: "laboratory", definition: "A place for scientific experiments", sentence: "The lab was well-equipped." },
            { word: "language", definition: "A system of communication", sentence: "She studied foreign languages." },
            { word: "laughter", definition: "The sound of laughing", sentence: "Laughter filled the room." },
            { word: "young", definition: "Having lived for a short time", sentence: "The puppy was young." },
            { word: "zero", definition: "The number 0", sentence: "The temperature dropped to zero." }], 20),


            hard: this.generateWordLevels([
            { word: "restaurant", definition: "A place where meals are served", sentence: "We dined at a fancy restaurant." },
            { word: "university", definition: "An institution of higher education", sentence: "He attends the local university." },
            { word: "abstemious", definition: "Not self-indulgent, especially when eating and drinking", sentence: "His abstemious lifestyle surprised his friends." },
            { word: "accommodate", definition: "Provide lodging or sufficient space for", sentence: "The hotel can accommodate 500 guests." },
            { word: "acquiesce", definition: "Accept something reluctantly but without protest", sentence: "She acquiesced to their demands." },
            { word: "anachronistic", definition: "Belonging to a period other than that being portrayed", sentence: "The film's use of cellphones was anachronistic." },
            { word: "antediluvian", definition: "Ridiculously old-fashioned", sentence: "His antediluvian views shocked the committee." },
            { word: "asphyxiate", definition: "Kill or deprive of oxygen", sentence: "The smoke nearly asphyxiated the firefighters." },
            { word: "autochthonous", definition: "Indigenous rather than descended from migrants", sentence: "The autochthonous tribes preserved their traditions." },
            { word: "belligerent", definition: "Hostile and aggressive", sentence: "The belligerent drunk started a fight." },
            { word: "bellwether", definition: "A leading indicator of trends", sentence: "The tech sector is a bellwether of the economy." },
            { word: "berserk", definition: "Out of control with anger or excitement", sentence: "The crowd went berserk when the band appeared." },
            { word: "bombastic", definition: "High-sounding but with little meaning", sentence: "The politician's bombastic speech annoyed voters." },
            { word: "bouillabaisse", definition: "A complex fish stew from Provence", sentence: "The chef's bouillabaisse won awards." },
            { word: "bourgeois", definition: "Conventional middle-class values", sentence: "He rejected his parents' bourgeois lifestyle." },
            { word: "braggadocio", definition: "Boastful or arrogant behavior", sentence: "His braggadocio masked deep insecurities." },
            { word: "brusque", definition: "Abrupt or offhand in speech or manner", sentence: "Her brusque reply offended the customer." },
            { word: "cacophony", definition: "A harsh, discordant mixture of sounds", sentence: "A cacophony of car horns filled the street." },
            { word: "camaraderie", definition: "Mutual trust and friendship among teammates", sentence: "The team's camaraderie led to success." },
            { word: "capricious", definition: "Given to sudden changes of mood", sentence: "The capricious weather ruined our picnic." },
            { word: "cataclysmic", definition: "Causing sudden violent change", sentence: "The earthquake had cataclysmic effects." },
            { word: "charlatan", definition: "A person falsely claiming knowledge", sentence: "The fake doctor was exposed as a charlatan." },
            { word: "chicanery", definition: "Deception by artful subterfuge", sentence: "The contract was full of legal chicanery." },
            { word: "chiaroscuro", definition: "Strong contrast between light and dark in art", sentence: "The painting's chiaroscuro created drama." },
            { word: "circumlocution", definition: "Indirect and wordy language", sentence: "His circumlocution avoided the real issue." },
            { word: "colloquialism", definition: "Informal words or expressions", sentence: "The novel used regional colloquialisms." },
            { word: "commensurate", definition: "Corresponding in size or degree", sentence: "The punishment wasn't commensurate with the crime." },
            { word: "connoisseur", definition: "An expert judge in matters of taste", sentence: "The connoisseur praised the rare wine." },
            { word: "conscientious", definition: "Wishing to do what is right", sentence: "She was a conscientious student." },
            { word: "contretemps", definition: "An unexpected mishap", sentence: "A contretemps delayed the wedding." },
            { word: "convivial", definition: "Friendly, lively, and enjoyable", sentence: "The party had a convivial atmosphere." },
            { word: "cornucopia", definition: "An abundant supply of good things", sentence: "The market offered a cornucopia of fruits." },
            { word: "corpulent", definition: "Fat or obese", sentence: "The corpulent man struggled to climb the stairs." },
            { word: "crescendo", definition: "A gradual increase in loudness", sentence: "The music built to a thunderous crescendo." },
            { word: "cynosure", definition: "A person or thing that is the center of attention", sentence: "The bride was the cynosure of all eyes." },
            { word: "dearth", definition: "A scarcity or lack of something", sentence: "There was a dearth of evidence." },
            { word: "debacle", definition: "A sudden and ignominious failure", sentence: "The product launch was a complete debacle." },
            { word: "debauchery", definition: "Excessive indulgence in sensual pleasures", sentence: "The tales of Roman debauchery shocked him." },
            { word: "defenestration", definition: "The act of throwing someone out a window", sentence: "The famous defenestration sparked a war." },
            { word: "demagogue", definition: "A leader who exploits popular prejudices", sentence: "The demagogue roused the crowd's anger." },
            { word: "denouement", definition: "The final part of a narrative", sentence: "The play's denouement surprised everyone." },
            { word: "desultory", definition: "Lacking a plan, purpose, or enthusiasm", sentence: "They made desultory conversation." },
            { word: "diaphanous", definition: "Light, delicate, and translucent", sentence: "She wore a diaphanous silk dress." },
            { word: "dichotomy", definition: "A division into two contrasting parts", sentence: "The dichotomy between rich and poor grew." },
            { word: "didactic", definition: "Intended to teach, often excessively", sentence: "The novel's didactic tone annoyed readers." },
            { word: "dilapidated", definition: "In a state of disrepair or ruin", sentence: "The dilapidated house was condemned." },
            { word: "discombobulate", definition: "To confuse or disconcert", sentence: "The tricky question discombobulated him." },
            { word: "disparate", definition: "Essentially different in kind", sentence: "The group contained disparate opinions." },
            { word: "disseminate", definition: "Spread widely", sentence: "The organization disseminates information." },
            { word: "dissonance", definition: "Lack of harmony between notes", sentence: "The song used dissonance for effect." },
            { word: "doppelgänger", definition: "An apparition or double of a person", sentence: "He met his doppelgänger at the party." },
            { word: "ebullient", definition: "Cheerful and full of energy", sentence: "Her ebullient personality lit up the room." },
            { word: "eclectic", definition: "Deriving ideas from diverse sources", sentence: "His taste in music was eclectic." },
            { word: "effervescent", definition: "Bubbly or vivacious", sentence: "Her effervescent laugh was contagious." },
            { word: "egregious", definition: "Outstandingly bad", sentence: "The judge called it an egregious error." },
            { word: "elegiac", definition: "Expressing sorrow or lamentation", sentence: "The poem had an elegiac tone." },
            { word: "elucidate", definition: "To make clear or explain", sentence: "The professor elucidated the theory." },
            { word: "embezzlement", definition: "Theft of entrusted funds", sentence: "The accountant was arrested for embezzlement." },
            { word: "empirical", definition: "Based on observation rather than theory", sentence: "The study relied on empirical data." },
            { word: "enervate", definition: "To weaken or drain energy", sentence: "The heat enervated the marathon runners." },
            { word: "ephemeral", definition: "Lasting for a very short time", sentence: "Their happiness proved ephemeral." },
            { word: "epistemology", definition: "The theory of knowledge", sentence: "The philosophy class studied epistemology." },
            { word: "equanimity", definition: "Mental calmness under pressure", sentence: "She faced the crisis with equanimity." },
            { word: "equivocate", definition: "To use ambiguous language", sentence: "Politicians often equivocate under pressure." },
            { word: "erudite", definition: "Having great knowledge", sentence: "The professor was erudite but humble." },
            { word: "esoteric", definition: "Intended for a small, knowledgeable group", sentence: "The lecture was too esoteric for most." },
            { word: "euphemism", definition: "A mild term substituting for a harsh one", sentence: "'Passed away' is a euphemism for 'died.'" },
            { word: "exacerbate", definition: "To make worse", sentence: "His comments exacerbated the conflict." },
            { word: "exculpate", definition: "To clear from blame", sentence: "The evidence exculpated the suspect." },
            { word: "exegesis", definition: "Critical explanation of a text", sentence: "The rabbi's exegesis clarified the scripture." },
            { word: "exorbitant", definition: "Unreasonably high", sentence: "The hotel charged exorbitant prices." },
            { word: "expedite", definition: "To speed up a process", sentence: "The manager expedited the order." },
            { word: "extemporaneous", definition: "Spoken or done without preparation", sentence: "Her extemporaneous speech impressed everyone." },
            { word: "facetious", definition: "Treating serious issues with humor", sentence: "His facetious remark offended some." },
            { word: "fastidious", definition: "Very attentive to detail", sentence: "The chef was fastidious about cleanliness." },
            { word: "fatuous", definition: "Silly and pointless", sentence: "She ignored his fatuous comments." },
            { word: "feckless", definition: "Lacking initiative or strength", sentence: "The feckless employee was fired." },
            { word: "fiduciary", definition: "Involving trust, especially financial", sentence: "Lawyers have fiduciary responsibilities." },
            { word: "filibuster", definition: "Prolonged speech to delay legislation", sentence: "The senator staged a 12-hour filibuster." },
            { word: "flabbergasted", definition: "Extremely surprised", sentence: "I was flabbergasted by the news." },
            { word: "floccinaucinihilipilification", definition: "The action of estimating as worthless", sentence: "His floccinaucinihilipilification of art annoyed critics." },
            { word: "fortuitous", definition: "Happening by chance", sentence: "Their meeting was fortuitous." },
            { word: "fractious", definition: "Irritable and quarrelsome", sentence: "The fractious child disrupted class." },
            { word: "garrulous", definition: "Excessively talkative", sentence: "The garrulous taxi driver never stopped." },
            { word: "grandiloquent", definition: "Pompous or extravagant in language", sentence: "His grandiloquent speech bored everyone." },
            { word: "gregarious", definition: "Fond of company", sentence: "She was gregarious and outgoing." },
            { word: "harbinger", definition: "A sign of what is to come", sentence: "The first robin is a harbinger of spring." },
            { word: "hegemony", definition: "Dominance of one group over others", sentence: "The country resisted foreign hegemony." },
            { word: "hermeneutics", definition: "The study of interpretation", sentence: "Theology students study hermeneutics." },
            { word: "heterogeneous", definition: "Diverse in character", sentence: "The group was heterogeneous." },
            { word: "hubris", definition: "Excessive pride", sentence: "His hubris led to his downfall." },
            { word: "iconoclast", definition: "A person who attacks cherished beliefs", sentence: "The artist was an iconoclast." },
            { word: "idiosyncratic", definition: "Peculiar to an individual", sentence: "His idiosyncratic style was memorable." },
            { word: "ignominious", definition: "Deserving public shame", sentence: "The scandal led to his ignominious resignation." },
            { word: "imbroglio", definition: "A complicated situation", sentence: "The political imbroglio lasted months." },
            { word: "impervious", definition: "Unable to be affected", sentence: "He was impervious to criticism." },
            { word: "impetuous", definition: "Acting without thinking", sentence: "Her impetuous decision cost her dearly." },
            { word: "incontrovertible", definition: "Impossible to deny", sentence: "The evidence was incontrovertible." },
            { word: "ineffable", definition: "Too great to be expressed", sentence: "The beauty was ineffable." },
            { word: "ingénue", definition: "An innocent young woman", sentence: "She played the ingénue in the play." },
            { word: "innocuous", definition: "Not harmful or offensive", sentence: "The comment seemed innocuous." },
            { word: "inscrutable", definition: "Impossible to understand", sentence: "His expression was inscrutable." },
            { word: "insouciant", definition: "Casually unconcerned", sentence: "His insouciant attitude annoyed her." },
            { word: "interlocutor", definition: "A person in conversation", sentence: "He was my main interlocutor." },
            { word: "intransigent", definition: "Unwilling to change views", sentence: "The intransigent senator blocked the bill." },
            { word: "inveigle", definition: "To persuade by deception", sentence: "He inveigled his way into the club." },
            { word: "irascible", definition: "Easily angered", sentence: "The irascible old man yelled at kids." },
            { word: "jejune", definition: "Naive or simplistic", sentence: "The jejune argument failed to convince." },
            { word: "juggernaut", definition: "A huge, powerful force", sentence: "The company became a juggernaut." },
            { word: "kaleidoscopic", definition: "With complex patterns of colors", sentence: "The kaleidoscopic images dazzled us." },
            { word: "kowtow", definition: "Act obsequiously", sentence: "He refused to kowtow to authority." },
            { word: "lachrymose", definition: "Tearful or given to weeping", sentence: "The lachrymose widow mourned deeply." },
            { word: "languid", definition: "Slow and relaxed", sentence: "The heat made everyone languid." },
            { word: "legerdemain", definition: "Sleight of hand or deception", sentence: "The magician's legerdemain fooled us." },
            { word: "licentious", definition: "Promiscuous or unprincipled", sentence: "The novel depicted licentious aristocrats." },
            { word: "logorrhea", definition: "Excessive talkativeness", sentence: "His logorrhea exhausted listeners." },
            { word: "lugubrious", definition: "Looking or sounding sad", sentence: "The lugubrious music set the mood." },
            { word: "machination", definition: "A plot or scheme", sentence: "The villain's machinations were exposed." },
            { word: "maelstrom", definition: "A powerful whirlpool or chaotic situation", sentence: "The scandal created a political maelstrom." },
            { word: "magnanimous", definition: "Generous or forgiving", sentence: "The magnanimous winner praised his opponent." },
            { word: "malfeasance", definition: "Wrongdoing by a public official", sentence: "The mayor resigned over malfeasance." },
            { word: "mellifluous", definition: "Sweet-sounding", sentence: "Her mellifluous voice soothed babies." },
            { word: "mendacious", definition: "Not telling the truth", sentence: "The mendacious witness was discredited." },
            { word: "meretricious", definition: "Superficially attractive but fake", sentence: "The meretricious jewelry fooled no one." },
            { word: "metamorphosis", definition: "A transformation", sentence: "The caterpillar's metamorphosis amazed the children." },
            { word: "misanthropic", definition: "Disliking humankind", sentence: "The misanthropic hermit avoided people." },
            { word: "mischievous", definition: "Causing minor trouble", sentence: "The mischievous puppy chewed shoes." },
            { word: "mnemonic", definition: "Aiding memory", sentence: "She used a mnemonic to recall the planets." },
            { word: "modicum", definition: "A small quantity", sentence: "He lacked even a modicum of decency." },
            { word: "mordant", definition: "Sharply critical", sentence: "Her mordant wit made enemies." },
            { word: "moribund", definition: "Near death", sentence: "The moribund patient whispered goodbye." },
            { word: "munificent", definition: "More generous than usual", sentence: "The munificent donor saved the museum." },
            { word: "myriad", definition: "A countless number", sentence: "The sky held a myriad of stars." },
            { word: "nadir", definition: "The lowest point", sentence: "After the scandal, his career hit its nadir." },
            { word: "nebulous", definition: "Vague or ill-defined", sentence: "The plan remained nebulous." },
            { word: "nefarious", definition: "Wicked or criminal", sentence: "The nefarious plot was uncovered." },
            { word: "nemesis", definition: "A long-standing rival", sentence: "The detective finally caught his nemesis." },
            { word: "noisome", definition: "Having an extremely unpleasant smell", sentence: "The noisome odor came from the swamp." },
            { word: "nonplussed", definition: "Surprised and confused", sentence: "The bizarre question left her nonplussed." },
            { word: "nostrum", definition: "A quack remedy", sentence: "The salesman peddled his nostrum." },
            { word: "obfuscate", definition: "To deliberately make unclear", sentence: "The lawyer tried to obfuscate the truth." },
            { word: "obsequious", definition: "Obedient or attentive to an excessive degree", sentence: "The obsequious waiter hovered nervously." },
            { word: "obstreperous", definition: "Noisy and difficult to control", sentence: "The obstreperous child disrupted the class." },
            { word: "odious", definition: "Extremely unpleasant", sentence: "The odious criminal showed no remorse." },
            { word: "officious", definition: "Assertive of authority in an annoying way", sentence: "The officious clerk delayed everyone." },
            { word: "oleaginous", definition: "Excessively flattering or oily", sentence: "The oleaginous salesman repelled customers." },
            { word: "omnipotent", definition: "Having unlimited power", sentence: "No ruler is truly omnipotent." },
            { word: "onerous", definition: "Involving great effort", sentence: "The onerous task took all day." },
            { word: "opprobrium", definition: "Harsh criticism", sentence: "The corrupt official faced public opprobrium." },
            { word: "ostentatious", definition: "Designed to impress", sentence: "The ostentatious mansion drew stares." },
            { word: "palisade", definition: "A fence of wooden stakes", sentence: "The fort was surrounded by a palisade." },
            { word: "panacea", definition: "A solution for all problems", sentence: "The policy was no economic panacea." },
            { word: "paradigm", definition: "A typical example or pattern", sentence: "The study shifted the scientific paradigm." },
            { word: "paragon", definition: "A model of excellence", sentence: "She was a paragon of virtue." },
            { word: "parsimonious", definition: "Unwilling to spend money", sentence: "The parsimonious man reused tea bags." },
            { word: "pejorative", definition: "Expressing contempt", sentence: "The term had pejorative connotations." },
            { word: "penultimate", definition: "Second to last", sentence: "The penultimate chapter built suspense." },
            { word: "perfidious", definition: "Deceitful and untrustworthy", sentence: "The perfidious spy betrayed his country." },
            { word: "perfunctory", definition: "Carried out with minimum effort", sentence: "He gave a perfunctory apology." },
            { word: "perspicacious", definition: "Having keen judgment", sentence: "The perspicacious detective solved the case." },
            { word: "philistine", definition: "Hostile to culture", sentence: "The philistine dismissed modern art." },
            { word: "phlegmatic", definition: "Calm and unemotional", sentence: "His phlegmatic demeanor hid his anxiety." },
            { word: "piquant", definition: "Pleasantly sharp taste", sentence: "The sauce had a piquant flavor." },
            { word: "plenipotentiary", definition: "Having full power", sentence: "The ambassador was a plenipotentiary." },
            { word: "plethora", definition: "An excess of something", sentence: "The market offered a plethora of choices." },
            { word: "precipitous", definition: "Dangerously high or steep", sentence: "The precipitous cliff terrified hikers." },
            { word: "proclivity", definition: "A tendency to choose something", sentence: "He had a proclivity for risk-taking." },
            { word: "profligate", definition: "Recklessly extravagant", sentence: "The profligate heir wasted his fortune." },
            { word: "propensity", definition: "An inclination to behave a certain way", sentence: "She had a propensity for kindness." },
            { word: "propitious", definition: "Favorable", sentence: "The dark clouds were not propitious for a picnic." },
            { word: "prosaic", definition: "Dull or unimaginative", sentence: "His prosaic writing bored readers." },
            { word: "proselytize", definition: "Convert to another faith", sentence: "They tried to proselytize the villagers." },
            { word: "pugnacious", definition: "Eager to argue", sentence: "The pugnacious debater never backed down." },
            { word: "pulchritudinous", definition: "Physically beautiful", sentence: "The pulchritudinous actress turned heads." },
            { word: "quagmire", definition: "A soft boggy area or complex situation", sentence: "The legal case became a quagmire." },
            { word: "quixotic", definition: "Extremely idealistic", sentence: "His quixotic quest seemed hopeless." },
            { word: "quotidian", definition: "Occurring daily", sentence: "The quotidian routine bored her." },
            { word: "raconteur", definition: "A skilled storyteller", sentence: "The charming raconteur entertained guests." },
            { word: "recidivist", definition: "A repeat offender", sentence: "The recidivist was jailed again." },
            { word: "recondite", definition: "Little known; abstruse", sentence: "The professor studied recondite texts." },
            { word: "redolent", definition: "Strongly reminiscent", sentence: "The bakery was redolent of cinnamon." },
            { word: "refulgent", definition: "Shining brightly", sentence: "The refulgent moon lit the path." },
            { word: "remuneration", definition: "Payment for work", sentence: "The job offered excellent remuneration." },
            { word: "repudiate", definition: "Refuse to accept", sentence: "She repudiated the accusations." },
            { word: "rescind", definition: "Revoke or cancel", sentence: "The company rescinded its offer." },
            { word: "rhetoric", definition: "Persuasive speaking", sentence: "The politician's rhetoric inspired voters." },
            { word: "sagacious", definition: "Wise or shrewd", sentence: "The sagacious old owl gave advice." },
            { word: "salubrious", definition: "Health-giving", sentence: "The mountain air was salubrious." },
            { word: "sanctimonious", definition: "Making a show of virtue", sentence: "His sanctimonious preaching annoyed them." },
            { word: "sanguine", definition: "Optimistic", sentence: "She remained sanguine despite setbacks." },
            { word: "sardonic", definition: "Grimly mocking", sentence: "His sardonic smile unnerved her." },
            { word: "sartorial", definition: "Relating to tailoring", sentence: "He took sartorial pride in his suits." },
            { word: "scintilla", definition: "A tiny trace", sentence: "There wasn't a scintilla of evidence." },
            { word: "sedulous", definition: "Diligent and persistent", sentence: "Her sedulous efforts paid off." },
            { word: "serendipity", definition: "Finding valuable things by chance", sentence: "Their meeting was pure serendipity." },
            { word: "sesquipedalian", definition: "Given to using long words", sentence: "The sesquipedalian professor confused students." },
            { word: "sobriquet", definition: "A nickname", sentence: "'The Bard' was Shakespeare's sobriquet." },
            { word: "solicitous", definition: "Showing concern", sentence: "The nurse was solicitous of her patients." },
            { word: "somnolent", definition: "Sleepy or drowsy", sentence: "The somnolent cat yawned." },
            { word: "sophistry", definition: "Clever but false reasoning", sentence: "His argument was pure sophistry." },
            { word: "spasmodic", definition: "Occurring in brief bursts", sentence: "He made spasmodic progress." },], 20)
        };


        this.currentWord = null;
        this.currentLevelWords = [];
        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;
        this.currentLevel = 1;
        this.selectedLevel = 1;
        this.wordSource = 'predefined';
        this.hasDefinitions = true;
        this.currentMode = 'write';
        this.spokenLetters = [];

        this.speechSynthesis = window.speechSynthesis;
        this.recognition = null;

        this.initDOMElements();
        this.initEventListeners();
        this.initSpeechRecognition();
        this.populateLevelSelect();
        this.loadWordData(); // تحميل البيانات من ملف JSON
    }


    generateWordLevels(wordList, levelCount) {
        const levels = [];
        const wordsPerLevel = 10;
        const totalWordsNeeded = levelCount * wordsPerLevel;

        // إذا كانت الكلمات غير كافية، نضيف كلمات افتراضية
        while (wordList.length < totalWordsNeeded) {
            const newWord = {
                word: `word${wordList.length + 1}`,
                definition: `Definition ${wordList.length + 1}`,
                sentence: `Sentence ${wordList.length + 1}`
            };
            wordList.push(newWord);
        }

        for (let i = 0; i < levelCount; i++) {
            levels.push(wordList.slice(i * wordsPerLevel, (i + 1) * wordsPerLevel));
        }

        return levels;
    }

    // Initialize DOM elements
    initDOMElements() {
        // Setup screen
        this.setupScreen = document.getElementById('setup-screen');
        this.practiceScreen = document.getElementById('practice-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.wordSourceSelect = document.getElementById('word-source');
        this.difficultySelect = document.getElementById('difficulty');
        this.levelSelect = document.getElementById('level');
        this.customWordsTextarea = document.getElementById('custom-words');
        this.predefinedOptions = document.getElementById('predefined-options');
        this.customOptions = document.getElementById('custom-options');
        this.startBtn = document.getElementById('start-btn');

        // Practice screen
        this.wordDisplay = document.getElementById('word-display');
        this.hearWordBtn = document.getElementById('hear-word');
        this.showDefinitionBtn = document.getElementById('show-definition');
        this.showExampleBtn = document.getElementById('show-example');
        this.writeModeBtn = document.getElementById('write-mode');
        this.speakModeBtn = document.getElementById('speak-mode');
        this.writeContainer = document.getElementById('write-container');
        this.speakContainer = document.getElementById('speak-container');
        this.spellingInput = document.getElementById('spelling-input');
        this.submitSpellingBtn = document.getElementById('submit-spelling');
        this.startSpeakingBtn = document.getElementById('start-speaking');
        this.speechStatus = document.getElementById('speech-status');
        this.spokenLettersDisplay = document.getElementById('spoken-letters');
        this.resultMessage = document.getElementById('result-message');
        this.correctionMessage = document.getElementById('correction-message');
        this.nextWordBtn = document.getElementById('next-word');
        this.progressDisplay = document.getElementById('progress');
        this.currentLevelDisplay = document.getElementById('current-level');

        // Results screen
        this.completedLevelDisplay = document.getElementById('completed-level');
        this.correctCountDisplay = document.getElementById('correct-count');
        this.incorrectCountDisplay = document.getElementById('incorrect-count');
        this.totalMistakesDisplay = document.getElementById('total-mistakes');
        this.correctWordsList = document.getElementById('correct-words');
        this.incorrectWordsList = document.getElementById('incorrect-words');
        this.restartBtn = document.getElementById('restart-btn');
        this.practiceMistakesBtn = document.getElementById('practice-mistakes-btn');
        this.continueBtn = document.getElementById('continue-btn');
        this.nextLevelDisplay = document.getElementById('next-level');
    }

    // Initialize event listeners
    initEventListeners() {
        // Setup screen
        this.wordSourceSelect.addEventListener('change', () => this.toggleWordSource());
        this.startBtn.addEventListener('click', () => this.startPractice());

        // Practice screen
        this.hearWordBtn.addEventListener('click', () => this.speakWord());
        this.showDefinitionBtn.addEventListener('click', () => this.speakDefinition());
        this.showExampleBtn.addEventListener('click', () => this.speakExample());
        this.writeModeBtn.addEventListener('click', () => this.setMode('write'));
        this.speakModeBtn.addEventListener('click', () => this.setMode('speak'));
        this.submitSpellingBtn.addEventListener('click', () => this.checkSpelling());
        this.spellingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkSpelling();
        });
        this.startSpeakingBtn.addEventListener('click', () => this.startSpeechRecognition());
        this.nextWordBtn.addEventListener('click', () => this.nextWord());

        // Results screen
        this.restartBtn.addEventListener('click', () => this.restartPractice());
        this.practiceMistakesBtn.addEventListener('click', () => this.practiceMistakes());
        this.continueBtn.addEventListener('click', () => this.continueToNextLevel());
    }

    initSpeechRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Speech recognition not supported. Try Chrome or Edge.");
            this.speakModeBtn.disabled = true;
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        // قاموس تحويل الكلمات → أحرف
        const wordToLetter = {
            'a':'A','ay':'A','alpha':'A',
            'b':'B','bee':'B','bravo':'B',
            'c':'C','see':'C','charlie':'C',
            'd':'D','dee':'D','delta':'D',
            'e':'E','ee':'E','echo':'E',
            'f':'F','ef':'F','foxtrot':'F',
            'g':'G','gee':'G','golf':'G',
            'h':'H','aitch':'H','hotel':'H',
            'i':'I','eye':'I','india':'I',
            'j':'J','jay':'J','juliet':'J',
            'k':'K','kay':'K','kilo':'K',
            'l':'L','el':'L','lima':'L',
            'm':'M','em':'M','mike':'M',
            'n':'N','en':'N','november':'N',
            'o':'O','oh':'O','oscar':'O',
            'p':'P','pee':'P','papa':'P',
            'q':'Q','queue':'Q','quebec':'Q',
            'r':'R','ar':'R','romeo':'R',
            's':'S','ess':'S','sierra':'S',
            't':'T','tee':'T','tango':'T',
            'u':'U','you':'U','uniform':'U',
            'v':'V','vee':'V','victor':'V',
            'w':'W','doubleyou':'W','double you':'W','whiskey':'W',
            'x':'X','ex':'X','xray':'X',
            'y':'Y','why':'Y','yankee':'Y',
            'z':'Z','zed':'Z','zee':'Z','zulu':'Z'
        };

        const normalizeToLetter = (raw) => {
            raw = raw.trim().toLowerCase();
            if (raw.length === 1 && raw >= 'a' && raw <= 'z') return raw.toUpperCase();
            if (wordToLetter[raw]) return wordToLetter[raw];
            return null;
        };

        this.recognition.onresult = (event) => {
            const raw = event.results[0][0].transcript.trim().toLowerCase();
            console.log("Heard:", raw);

            let letters = [];

            // 1) لو قال حرف واحد (ay, bee, see...)
            if (wordToLetter[raw]) {
                letters.push(wordToLetter[raw]);
            } 
            // 2) لو قال سلسلة بحروف مفصولة (a p p l e)
            else if (raw.includes(" ")) {
                raw.split(/\s+/).forEach(t => {
                    if (wordToLetter[t]) {
                        letters.push(wordToLetter[t]);
                    } else if (t.length === 1 && t >= 'a' && t <= 'z') {
                        letters.push(t.toUpperCase());
                    }
                });
            } 
            // 3) لو قال كلمة كاملة (apple)
            else if (raw.length > 1) {
                letters = raw.split('').map(c => c.toUpperCase());
            }
    
            if (letters.length > 0) {
                letters.forEach(l => {
                    if (this.spokenLetters.length < this.currentWord.word.length) {
                        this.spokenLetters.push(l);
                        this.updateSpokenLetters();
                    }
                });
    
                if (this.spokenLetters.join('') === this.currentWord.word.toUpperCase()) {
                    this.checkSpokenSpelling();
                } else if (this.spokenLetters.length < this.currentWord.word.length) {
                    setTimeout(() => this.startSpeechRecognition(), 400);
                }
            } else {
                this.speechStatus.textContent = `Heard: "${raw}". Try again, say letters (A, Bee, See)`;
                setTimeout(() => this.startSpeechRecognition(), 600);
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
            this.speechStatus.textContent = `Error: ${event.error}`;
            this.stopSpeechRecognition();
        };

        this.recognition.onend = () => {
            if (this.startSpeakingBtn && this.startSpeakingBtn.classList.contains('listening')) {
                // استمع من جديد إذا لم ننتهي بعد
                if (this.spokenLetters.length < this.currentWord.word.length) {
                    setTimeout(() => this.startSpeechRecognition(), 200);
                }
            }
        };
    }

    startSpeechRecognition() {
        if (!this.recognition) return;

        try {
            this.stopSpeechRecognition();
            if (this.spokenLetters.length === 0) {
                this.updateSpokenLetters();
            }

            this.speechStatus.textContent = "Listening... say a letter";
            this.startSpeakingBtn.classList.add('listening');
            this.recognition.start();
        } catch (error) {
            console.error('Error starting recognition:', error);
            this.speechStatus.textContent = "Error starting microphone";
        }
    }

    stopSpeechRecognition() {
        try {
            if (this.recognition) {
                this.recognition.stop();
            }
        } catch (error) {
            console.error('Error stopping recognition:', error);
        }
        this.startSpeakingBtn.classList.remove('listening');
    }

    populateLevelSelect() {
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Level ${i}`;
            this.levelSelect.appendChild(option);
        }
    }

    toggleWordSource() {
        this.wordSource = this.wordSourceSelect.value;
        if (this.wordSource === 'predefined') {
            this.predefinedOptions.classList.remove('hidden');
            this.customOptions.classList.add('hidden');
        } else {
            this.predefinedOptions.classList.add('hidden');
            this.customOptions.classList.remove('hidden');
        }
    }

    async startPractice() {
        // الانتظار حتى يتم تحميل البيانات إذا لم تكن محملة بعد
        if (this.wordSource === 'predefined' && this.wordBanks.easy.length === 0) {
            await this.loadWordData();
        }

        if (this.wordSource === 'predefined') {
            const difficulty = this.difficultySelect.value;
            this.selectedLevel = parseInt(this.levelSelect.value);
            this.currentLevelWords = this.wordBanks[difficulty][this.selectedLevel - 1];
            this.currentLevel = this.selectedLevel;
            this.hasDefinitions = true;
        } else {
            const words = this.customWordsTextarea.value.trim().split('\n')
                .filter(word => word.trim().length > 0)
                .map(word => ({ word: word.trim(), definition: "", sentence: "" }));
            
            if (words.length === 0) {
                alert("Please enter at least one word");
                return;
            }
            
            this.currentLevelWords = words.slice(0, 10);
            this.currentLevel = 1;
            this.hasDefinitions = false;
        }

        this.showDefinitionBtn.disabled = !this.hasDefinitions;
        this.showExampleBtn.disabled = !this.hasDefinitions;

        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }

    showScreen(screen) {
        this.setupScreen.classList.add('hidden');
        this.practiceScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');

        if (screen === 'setup') {
            this.setupScreen.classList.remove('hidden');
        } else if (screen === 'practice') {
            this.practiceScreen.classList.remove('hidden');
        } else if (screen === 'results') {
            this.resultsScreen.classList.remove('hidden');
        }
    }

    nextWord() {
        this.resetWordState();

        if (this.currentIndex >= this.currentLevelWords.length) {
            this.showResults();
            return;
        }

        this.currentWord = this.currentLevelWords[this.currentIndex];
        this.currentIndex++;

        this.updateProgress();
        this.speakWord();
    }

    resetWordState() {
        this.wordDisplay.textContent = '';
        this.spellingInput.value = '';
        this.resultMessage.textContent = '';
        this.resultMessage.className = 'result';
        this.correctionMessage.innerHTML = '';
        this.spokenLetters = [];
        this.spokenLettersDisplay.textContent = '';
        this.nextWordBtn.classList.add('hidden');
        this.speechStatus.textContent = 'Press button and spell letter by letter';

        if (this.currentMode === 'write') {
            this.spellingInput.focus();
        }
    }

    updateProgress() {
        this.progressDisplay.textContent = `${this.currentIndex}/${this.currentLevelWords.length}`;
        this.currentLevelDisplay.textContent = `Level ${this.currentLevel}`;
    }

    speakWord() {
        if (!this.currentWord || !this.speechSynthesis) return;

        const utterance = new SpeechSynthesisUtterance(this.currentWord.word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    speakDefinition() {
        if (!this.currentWord || !this.hasDefinitions) return;

        const utterance = new SpeechSynthesisUtterance(`Definition: ${this.currentWord.definition}`);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    speakExample() {
        if (!this.currentWord || !this.hasDefinitions) return;

        const utterance = new SpeechSynthesisUtterance(`Example: ${this.currentWord.sentence}`);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        
        this.speechSynthesis.cancel();
        this.speechSynthesis.speak(utterance);
    }

    setMode(mode) {
        this.currentMode = mode;
        this.spokenLetters = [];
        this.spokenLettersDisplay.textContent = '';

        if (mode === 'write') {
            this.writeModeBtn.classList.add('active');
            this.speakModeBtn.classList.remove('active');
            this.writeContainer.classList.remove('hidden');
            this.speakContainer.classList.add('hidden');
            this.spellingInput.focus();
        } else {
            this.writeModeBtn.classList.remove('active');
            this.speakModeBtn.classList.add('active');
            this.writeContainer.classList.add('hidden');
            this.speakContainer.classList.remove('hidden');
        }
    }

    updateSpokenLetters() {
        this.spokenLettersDisplay.textContent = this.spokenLetters.join(' ');
    }

    checkSpokenSpelling() {
        const spokenWord = this.spokenLetters.join('').toLowerCase();
        const isCorrect = spokenWord === this.currentWord.word.toLowerCase();

        if (isCorrect) {
            this.handleCorrectAnswer();
            setTimeout(() => this.nextWord(), 1500);
        } else {
            this.handleIncorrectAnswer(spokenWord);
            this.nextWordBtn.classList.remove('hidden');
        }

        this.stopSpeechRecognition();
    }

    checkSpelling() {
        const userInput = this.currentMode === 'write' 
            ? this.spellingInput.value.trim() 
            : this.spokenLetters.join('');
        
        if (!userInput) {
            alert("Please enter your spelling");
            return;
        }

        const isCorrect = userInput.toLowerCase() === this.currentWord.word.toLowerCase();

        if (isCorrect) {
            this.handleCorrectAnswer();
            setTimeout(() => this.nextWord(), 1500);
        } else {
            this.handleIncorrectAnswer(userInput);
            this.nextWordBtn.classList.remove('hidden');
        }
    }


    handleCorrectAnswer() {
        this.resultMessage.textContent = 'Correct! 👍';
        this.resultMessage.className = 'result correct-result';
    
        if (!this.correctWords.some(w => w.word === this.currentWord.word)) {
            this.correctWords.push(this.currentWord);
        }

        const incorrectIndex = this.incorrectWords.findIndex(w => w.word === this.currentWord.word);
        if (incorrectIndex !== -1) {
            this.incorrectWords.splice(incorrectIndex, 1);
        }
    }

    handleIncorrectAnswer(userInput) {
        this.resultMessage.textContent = 'Incorrect! ❌';
        this.resultMessage.className = 'result incorrect-result';
        this.wordDisplay.textContent = this.currentWord.word;
        this.totalMistakes++;
    
        if (!this.incorrectWords.some(w => w.word === this.currentWord.word)) {
            this.incorrectWords.push(this.currentWord);
        }
    
        this.showCorrection(userInput);
    }

    showCorrection(userInput) {
        this.correctionMessage.innerHTML = `
            <div class="correction-message">Correct spelling:</div>
            <div class="correct-spelling">${this.currentWord.word}</div>
            <div class="incorrect-spelling">Your answer: ${userInput}</div>
        `;
    }

    showResults() {
        this.completedLevelDisplay.textContent = `Level ${this.currentLevel} Complete!`;
        this.correctCountDisplay.textContent = this.correctWords.length;
        this.incorrectCountDisplay.textContent = this.incorrectWords.length;
        this.totalMistakesDisplay.textContent = this.totalMistakes;
        this.nextLevelDisplay.textContent = this.currentLevel + 1;

        this.displayWordList(this.correctWordsList, this.correctWords);
        this.displayWordList(this.incorrectWordsList, this.incorrectWords);

        this.showScreen('results');
    }

    displayWordList(container, words) {
        container.innerHTML = '';
        words.forEach(word => {
            const div = document.createElement('div');
            div.textContent = word.word;
            container.appendChild(div);
        });
    }

    restartPractice() {
        this.showScreen('setup');
    }

    practiceMistakes() {
        if (this.incorrectWords.length === 0) {
            alert("No incorrect words to practice");
            return;
        }

        // استخدم نسخة من المصفوفة (لا تضع تركيب خاطئ)
        this.currentLevelWords = [...this.incorrectWords];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }

    continueToNextLevel() {
        if (this.wordSource === 'predefined') {
            const difficulty = this.difficultySelect.value;
            const nextLevel = this.currentLevel + 1;
            
            if (nextLevel > 20) {
                alert("You've completed all levels in this difficulty!");
                this.showScreen('setup');
                return;
            }

            this.currentLevelWords = this.wordBanks[difficulty][nextLevel - 1];
            this.currentLevel = nextLevel;
        } else {
            const words = this.customWordsTextarea.value.trim().split('\n')
                .filter(word => word.trim().length > 0)
                .map(word => ({ word: word.trim(), definition: "", sentence: "" }));
            
            const startIdx = this.currentLevel * 10;
            this.currentLevelWords = words.slice(startIdx, startIdx + 10);

            if (this.currentLevelWords.length === 0) {
                alert("No more words in your list!");
                this.showScreen('setup');
                return;
            }

            this.currentLevel++;
        }

        this.correctWords = [];
        this.incorrectWords = [];
        this.currentIndex = 0;
        this.totalMistakes = 0;

        this.showScreen('practice');
        this.nextWord();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new SpellingBeePro();
});