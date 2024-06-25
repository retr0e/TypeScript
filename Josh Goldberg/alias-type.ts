// Aliasy typów nie są kompilowane do JS,
// są dostępne tylko podczas pracy programistycznej
type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

// Można łączyć aliasy typów

type Id = number | string;
type IdMaybe = Id | undefined | null;

// Aliast typu może być wykorzystany przed jego wykorzystaniem

// type IdMaybe = Id | undefined | null;
// type Id = number | string;
