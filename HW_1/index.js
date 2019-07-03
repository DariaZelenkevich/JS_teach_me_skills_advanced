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
  
    map(callback) {
        const newArray = new Array();

        for(let i = 0; i < this.array.length; i++) {

            newArray.push(callback(this.array[i], i, this.array));
        }

        return newArray;
    }
  
    filter(callback) {
        const newArray = new Array();

        for(let i = 0; i < this.array.length; i++) {

            let filterRes = callback(this.array[i], i, this.array);
            
            if(filterRes) {

                newArray.push(this.array[i]);
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
  
    sort(compareFunction) {

        for(let i = 0, end = this.array.length - 1; i < end; i++) {
            for(let j = 0, endj = end - i; j < endj; j++) {
                if(compareFunction(this.array[i], this.array[j + 1]) > 0) {
                    const temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
        
                }
            }
        }
    }
  
    includes(searchElement, fromIndex) {

        let start = fromIndex || 0;

        for(let i = start; i < this.array.length; i++) {
            
            if(searchElement == this.array[i]) {

                return true;
            }    
        }
        return false;
    }
}