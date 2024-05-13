import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context'
import { Button, Modal, ModalAction, ModalContent } from '../../components'

const Logout = () => {
  const [open, setOpen] = useState<boolean>(true)
  const navigate = useNavigate()
  const { logout } = useAuth()

  const onAccept = useCallback(() => {
    logout(() => {
      setOpen(!open)
      navigate('/')
    })
  }, [navigate, setOpen, logout])

  const onCancel = useCallback(() => {
    setOpen(!open)
    navigate(-1)
  }, [navigate, setOpen])

  return (
    <Modal open={open}>
      <ModalContent className="border-4 shadow-lg">
        <p className="text-xl">Are you sure you want to logout?</p>
        <ModalAction>
          <Button
            className="btn-primary btn-sm"
            onClick={onAccept}
            name="ACCEPT"
          />
          <Button
            className="btn-secondary btn-sm"
            onClick={onCancel}
            name="CANCLE"
          />
        </ModalAction>
      </ModalContent>
    </Modal>
  )
}

export default Logout
