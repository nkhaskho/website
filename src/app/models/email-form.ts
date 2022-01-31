export class EmailForm {

    name: string = "";
    replyTo: string = "";
    message: string = "";

    isValid() {
        return this.name.length>0 && this.replyTo.includes("@") && this.message.length>0 ;
    }

    validate() {
        if (this.name.length==0) return "Name required!"
        if (!this.replyTo.includes("@")) return "Invalid email address!"
        if (this.message.length==0) return "Message could not be empty!"
        return ""
    }

}
