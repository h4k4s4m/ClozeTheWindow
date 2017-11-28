var ClozeCard = function ClozeCard(text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(front, back);
    }
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.split(cloze).join("...");
    if (this.partial === this.fullText) {
        console.log("Error! Cloze is not found in text! Dude, pay attention!")
    }
}


module.exports = ClozeCard;