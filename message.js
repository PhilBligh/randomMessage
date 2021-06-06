const comp1 = ['nose', 'eye', 'head', 'foot', 'clothing', 'ear', 'hair', 'face', 'shoulder']
const comp2 = ['amazing', 'awesome', 'astounding', 'incredible', 'sublime', 'the best thing I\'ve ever seen in my life', 'so damn fine', 'a thing of unmatched beauty', 'making me feel all quibbly']
const comp3 = ['Let me gaze upon it.', 'Teach me how I can be like you.', 'I wish mine was like that.', 'I hope that\'s not weird for me to say.', 'I would dearly like to see more of it.', 'Can I borrow it please?', 'Was it expensive?', 'Your parents must be so proud.', 'You rule']
let randomNumber = () => {
   return Math.floor(Math.random() * 9)
}
let message = comp1[randomNumber()]
console.log (message)