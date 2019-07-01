'use strict';

class MyArray {

    constructor() {

      this.array = [];
    }
  
    push(...items) {

      this.array.push(...items);
    }
  
    splice(start, deleteCount, ...items) {

        const newMyArray = new Array();
        const removedItems = [];

        let spliceStart;

        if(start >= 0) {

            if(start > this.array.length) {

                spliceStart = this.array.length;
            } else {

                spliceStart = start;
            }

        } else{

            spliceStart = this.array.length + start;
        }
        

        for(let i = 0; i < spliceStart; i++) {

            newMyArray.push(this.array[i]);
        }


        if(deleteCount) {

            if(items) {

                newMyArray.push(...items);
            }

            for(let j = (spliceStart + deleteCount); j < this.array.length; j++) {

                newMyArray.push(this.array[j]);
            }

            for(let n = spliceStart; n < (spliceStart + deleteCount); n++) {
              
                removedItems.push(this.array[n]);
            }
        } else {

            if(deleteCount === 0){
               
                if(items){

                    newMyArray.push(...items);
                }
              
                for(let j = spliceStart; j <  this.array.length; j++) {

                    newMyArray.push(this.array[j]);
                }

            } else {

                for(let n = spliceStart; n < this.array.length; n++) {

                    removedItems.push(this.array[n]);
                }
            }

        }

        for(let i = this.array.length; i >  0; i--) {

            this.array.shift(this.array[i]);
        }

        for(let j = 0; j <  newMyArray.length; j++) {

            this.array.push(newMyArray[j]);
        }

        return  removedItems;
    }
  
    map(callback,currentVal, index, array) {
        const newArray = new Array();

        for(let i = 0; i < this.array.length; i++) {

            array = this.array;
            index = i;
            currentVal = this.array[i];

            newArray.push(callback(currentVal, index, array));
        }

        return newArray;
    }
  
    filter(callback,currentVal, index, array) {
        const newArray = new Array();

        for(let i = 0; i < this.array.length; i++) {

            array = this.array;
            index = i;
            currentVal = this.array[i];

            let filterRes = callback(currentVal, index, array);
            
            if(filterRes) {

                newArray.push(currentVal);
            }    
        }

        return newArray;
    }
  
    find(callback, currentVal, index, array) {

        for(let i = 0; i < this.array.length; i++) {

            array = this.array;
            index = i;
            currentVal = this.array[i];

            let findRes = callback(currentVal, index, array);
            
            if(findRes) {

                return currentVal;
            }    
        }

        return undefined;
    }
  
    sort(compareFunction) {}
  
    includes(searchElement, fromIndex) {

        let start = fromIndex || 0;

        for(let i = start; i < this.array.length; i++) {

            let currentVal = this.array[i];
            
            if(searchElement == currentVal) {

                return true;
            }    
        }
        return false;
    }
}