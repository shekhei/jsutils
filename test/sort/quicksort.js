import {sort} from "../../lib";
import {expect} from "chai";

describe("Simple sort should be correctly sorted", ()=>{
  var arr = [12,123,123,1,24,12,32,24,123,124,1242,32,3241,23,232,4123,12322,34123];
  var result = arr.sort();

  it("Should be the same as native implementation", ()=>{
    sort.quicksort(arr);
    expect(arr).to.be.eql(result);
  });
  it("Should be the same as native implementation for 10000 elements", ()=>{
    arr = [];
    for ( var i = 0; i < 10000; i++ ) {
      arr.push(Math.floor(Math.random()*1000));
    }
    result = arr.sort();
    sort.quicksort(arr);
    expect(arr).to.be.eql(result);
  });
})
