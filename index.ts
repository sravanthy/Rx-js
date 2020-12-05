import { Observable, fromEvent, of, interval } from "rxjs";
import { throttleTime, scan, map } from "rxjs/operators";

//1. Document Click Example
// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

//2. foo observable multiple calls Example
// const foo = new Observable(subscriber => {
//   console.log('Hello');
//   subscriber.next(30);
// });

// foo.subscribe(x => {
//   console.log(x);
// });
// foo.subscribe(y => {
//   console.log(y);
// });

//3. observables can be Synchronous
// console.log('before subscribe');
// foo.subscribe(x => {
//   console.log(x);
// });
// console.log('after subscribe, if observables are only asyn then this line should execute before the above consoles from foo.subscribe, but it works same like Synchronous freature of JS');

//4. Document Click Example
// const greetingLady$ = new Observable(observer => {
//   console.log('Inside Observable (proof of being lazy)');
//   observer.next('Hello! I am glad to get to know you.');
//   observer.complete();
// });

// console.log('Before calling subscribe on Observable');
// greetingLady$.subscribe({
//   next: console.log,
//   error: console.log,
//   complete: () => console.log('End of conversation with preety lady')
// });

//Another way of writing the same piece of above code, this is also a very common practice
// greetingLady$.subscribe((res) => {
//  console.log(res),
//  console.log('End of conversation with preety lady')
// });

//5. document click every 1 second click count
// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan(count => count + 1, 0)
//   )
//   .subscribe(count => console.log(`Clicked ${count} times`));

//6. document click in every 1 second and detect the client x location
// fromEvent(document, 'click')
// .pipe(
//   throttleTime(1000),
//   map(event => event.clientX),
//   scan((count, clientX) => count + clientX, 0)
// )
// .subscribe((count) => console.log(count),
// (err) => {
//   //error handling
// });

//7. Function & observable

// function myFun(){
//   return 10;
//   return 20;
// }

// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.next(5);
//   subscriber.next(6);
//   setTimeout(() => {
//     subscriber.next(7);
//     subscriber.complete();
//   }, 1000);
// });

// // console.log('just before subscribe');
// observable.subscribe({
//   next(x) { console.log('got value ' + x); },
//   error(err) { console.error('something wrong occurred: ' + err); },
//   complete() { console.log('done'); }
// });
// console.log('just after subscribe');

//8.
// map(x => x * x)(of(1, 2, 3)).subscribe((data) => console.log(`value: ${data}`));

//9.
// const interObservable = interval(1000);
// interObservable.subscribe(x => {
//   console.log(x);
// })

//10.

//Service to API Call
var myObservable = of("Arpit", "Anant", "Moh.", "Sandeep").pipe(
  map(x => x + "!!")
);

//component that will calll this above observable..
var mySubscription = myObservable.subscribe(x => console.log(x));
mySubscription.unsubscribe();
