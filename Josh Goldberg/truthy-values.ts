// TypeScript może wywnioskować, że w ciele instrukcji if zmienna musi być typu String
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

if (geneticist) {
  geneticist.toUpperCase(); // OK: string
}

// Nie ma sprawdzenia czy zmienna posiada wartość undefined
// geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

// Czy zmienna jest truthy można sprawdzić za pomocą operatorów logicznych && i ?.
geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase();

// Sprawdzenie wartości truthy nie działa w drugą strone
// Objaśnienie działania: Jeżeli pierwszy operand ma wartość true
// wtedy zmienna przyjmuje wartość "Rachel Carson" w przeciwnym wypadku false
let biologist = Math.random() > 0.5 && "Rachel Carson";

if (biologist) {
  biologist; // Typ: string
} else {
  biologist; // Typ false | string
}
