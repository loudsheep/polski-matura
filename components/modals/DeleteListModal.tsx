import { TasksObject } from "@/types/Tasks";

type DeleteListModalProps = {
    onCancel: () => void,
    onConfirm: () => void,
    listName: TasksObject | null,
};

export default function DeleteListModal(props: DeleteListModalProps) {
    return (
        <div id="authentication-modal" aria-hidden="true" className="fixed inset-0 inset-x-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all h-[100vh] max-h-full w-full bg-black bg-opacity-60">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  " data-modal-hide="popup-modal" onClick={props.onCancel}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-1 text-lg font-normal text-gray-500 ">Na pewno chcesz usunąć listę <strong>{props.listName?.name}</strong></h3>
                        <h4 className="text-sm text-gray-400 mb-5">Wszystkie dane zostaną trwale usunięte, w tym informacja o zrobionych zadaniach</h4>
                        <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={props.onConfirm}>
                            Tak, usuń
                        </button>
                        <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={props.onCancel}>Nie</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
