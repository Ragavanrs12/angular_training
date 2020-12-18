import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchItem:any ): any{
    const dummylist=[];
    if(searchItem!=null && value!=null){
    for (const data of value) {
      if(data.name.match(searchItem)  )
      dummylist.push(data)
      
    }
    if(dummylist.length!=0)
    return dummylist;
   // return value.filter((item) => item.includes(searchItem));
  } return value;

}
}
