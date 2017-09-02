document.getElementById("target").innerHTML = "hello my world";

function hello(name: string): void {
  console.log(`hello, ${name}!`);
}
hello('world');