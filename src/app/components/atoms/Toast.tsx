import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { ToastOptions, useToast } from '../../../context/ToastContext';

interface ToastProps {
    toastOptions: ToastOptions
}


function Toast({ toastOptions }: ToastProps) {
    const { type, title } = toastOptions;
    const { hideToast } = useToast();
    const colorMap: Record<string, string> = {
        'success': 'green',
        'error': 'red',
        'info': 'blue',
        'warning': 'orange'
    }
    const progressBarColor = colorMap[type] || 'green';
    console.log(type, progressBarColor);

    return (
        <div className='bg-white fixed w-full top-0 md:top-4 md:right-4 z-10 
        rounded-lg md:w-[320px]'>
            <div className='flex justify-between items-center px-4 py-4'>
                <div className='flex items-center'>
                    <CheckCircleIcon style={{ fontSize: '2rem', color: progressBarColor }} />
                    <p className='ml-2 secondary-para font-bold '>
                        {title}</p>
                </div>
                <button onClick={hideToast} className='absolute top-2 right-4'>
                    <CloseIcon
                        style={{ fontSize: '1rem', color: 'gray', cursor: 'pointer' }} />
                </button>
            </div>
            <div className={`progress-bar`}
                style={{ background: progressBarColor }}></div>
        </div>
    );
}

export default Toast;
