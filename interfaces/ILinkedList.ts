interface ILinkedList {
    addFirst(data: number): void;
    addLast(data: number): void;
    deleteFirst(): void;
    deleteLast(): void;
    contains(searchedValue: number): boolean;
    indexOf(searchedValue: number): number;
}
export default ILinkedList;