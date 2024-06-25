let mathematician: string;

// mathematician?.length;
// Error: Variable is used before being assigned

mathematician = "Mark Goldberg";
mathematician.length; // OK

// Can alter the situation to this:

let mathematician2: string | undefined;

mathematician2?.length; // OK
