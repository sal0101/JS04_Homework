// 1
for(var i =99; i>= 0;--i)
{

if(i == 0){
console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
}else{
console.log(`${i} ${i>1?'bottels':'bottle'} of beer on the wall, ${i} ${i>1?'bottels':'bottle'} of beer.Take one down and pass it around, ${(i-1) == 1?' 1 bottle': (i>1)?(i-1):'no more bottels'} of beer on the wal.`);

}
}
