var ClozeCard = function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.split(cloze).join("...");
    if (this.partial === this.fullText) {
        console.log("Error! Cloze is not found in text! Dude, pay attention!")
    }
}


module.exports = ClozeCard;