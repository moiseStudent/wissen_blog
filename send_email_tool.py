### Script para enviar mensajes por email 

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class SenderEmail:

    def __init__(self, email_sender, email_password, email_receiver,subject,body ):
        
        self.email_sender = email_sender
        self.email_password = email_password
        self.email_receiver = email_receiver
        self.subject = subject
        self.body = body
    
    
    def __email_settings(self):

        self.smtp_server = 'smtp.gmail.com'
        self.smtp_port = 587
        self.msg = MIMEMultipart()
        self.msg['From'] = self.email_sender
        self.msg['To'] = self.email_receiver
        self.msg['Subject'] = self.subject

        ### Adjuntar el cuerpo del mensaje
        self.msg.attach(MIMEText(self.body, 'plain'))
    
    def __send_email(self):
        ### Send Email
        try:
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.email_sender, self.email_password)
            server.send_message(self.msg)
            print("Correo enviado exitosamente.")
        
        except Exception as e:
            print(f"Ocurrió un error: {e}")
        
        finally:
            server.quit()
    
    def send(self):
        self.__email_settings()
        self.__send_email()

### Entry email data
def email():

    email_sender = input('Ingrese el email sender: ')
    email_password = input("Ingrese la clave de email: ")
    email_receiver = input("Ingrese el email de destino: ")
    subject = input("Ingrese el asusto o titulo: ")
    body = input("Ingrese el contenido del correo electronico: ")

    email = SenderEmail(
        email_sender,
        email_password,
        email_receiver,
        subject,
        body
    )

    email.send()

email()