class TowerOfHanoi {
    towerOfHanoi ( numberOfDisk , src , helper , dest) {
        if(numberOfDisk === 1){
            console.log('Transfer disk ' + numberOfDisk + " from "+src+" to " + dest);
            return;
        }
            this.towerOfHanoi(numberOfDisk-1,src , dest,helper);
            console.log('Transfer disk ' + numberOfDisk + " from "+src+" to " + dest);
            this.towerOfHanoi(numberOfDisk-1,helper , src,dest);
    }

}
let tower = new TowerOfHanoi();
let n = 3;
console.log(tower.towerOfHanoi(n,'S','H','D'))