class Mobile {
    constructor(name) {
        this.battery = 100;
        this.newmessage = '';
        this.inbox = [];
        this.outbox = [];
        this.status = false;
        this.name = name
    }

    checkOnOff() {
        this.dropBattery();
        return this.status;
    }

    turnOn() {
        this.dropBattery();
        this.status = true;
        return this.status;
    }

    turnOff() {
        this.dropBattery();
        this.status = false;
        return this.status;
    }

    chargeBattery() {
        if (this.checkBatteryFull()) {
            this.battery++;
        }
    }

    checkBatteryFull() {
        return this.battery < 100;
    }

    newMessage(txt) {
        this.dropBattery();
        this.newmessage = txt;
    }

    sendMessage(mobile) {
        this.dropBattery();
        mobile.inbox.push(this.newmessage);
        this.outbox.push(this.newmessage);
    }

    getInBox() {
        this.dropBattery();
        return this.inbox;
    }

    getOutBox() {
        this.dropBattery();
        return this.outbox;
    }

    getName() {
        return this.name;
    }

    dropBattery() {
        this.battery--;
    }


}