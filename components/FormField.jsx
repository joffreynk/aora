import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import icons from '../constants/icons'

const FormField = ({title, value, placeholder, handleChange, otherStyles, ...props}) => {
  const [showPassord, setShowPassord] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='font-pmedium text-base text-gray-100'>{title}</Text>
      <View className='border-2 border-black-200 w-full h-12  px-4 bg-black-100 rounded-2xl flex-row focus:border-secondary items-center'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChange}
          secureTextEntry={title==='Password' && showPassord }
         />
         {
          title === 'Password' && (
            <TouchableOpacity onPress={()=>setShowPassord(!showPassord)}>
              <Image source={showPassord?icons.eye: icons.eyeHide} className='w-6 h-6' resizeMode='contain' />
            </TouchableOpacity>
          )
         }
      </View>
    </View>
  )
}

export default FormField
