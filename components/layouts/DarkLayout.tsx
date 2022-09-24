interface Props {
   children: React.ReactNode
}

export const DarkLayout = ({ children }: Props) => {
   return (
      <div style={{
         backgroundColor: 'rgba(244,55,66,0.3)',
         borderRadius: '5px',
         padding: '10px',
      }}>
         {children}
      </div>
   )
}
