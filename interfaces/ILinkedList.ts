interface ILinkedList {
    addFirst(data: number): void;
    addLast(data: number): void;
    deleteFirst(): void;
    deleteLast(): void;
    contains(): boolean;
    indexOf(): number;
}
export default ILinkedList;