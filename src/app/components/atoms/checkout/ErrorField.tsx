
function ErrorField({ errorMsg }: { errorMsg: string }) {
    return (
        <div className="mb-3 mr-2">
            <p className="text-red-500 font-medium text-[10px] md:text-[12px]">{errorMsg}</p>
        </div>
    )
}

export default ErrorField