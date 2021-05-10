import Swal from 'sweetalert2'

export const Toaster = ({ type, message }) => {

  console.log(">>>>>>>>>>>>>>>>> type", type, "PPPPPPPPPPPPPPPPP",message);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: type,
    title: message
  })

}