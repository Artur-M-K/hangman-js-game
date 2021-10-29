export class Quote {
    constructor(text) {
        this.text = text;
        this.guessed = [];
    }
    getText() {
        let content = '';
        for (const char of this.text) {
            if (char == ' ' || this.guessed.includes(char)) {
                content += char;
            }else{
                content += '_';
            }
        }
        return content;
    }
    guess(letter) {
        if (!this.text.includes(letter)) {
            return false;
        }else{
            this.guessed.push(letter);
            return true;
        }
    } 
}

