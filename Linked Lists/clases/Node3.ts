import Entry from "../../Hash_Tables/interfaces/Entry";

export default class Node3 {
    constructor(
        public pair: Entry,
        public nextNode: Node3 | undefined = undefined
    ){}
}
