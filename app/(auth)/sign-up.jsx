import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from './../../components/CustomButton';
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwriteconfig'

const SignUp = () => {
  const submit= ()=>{
    createUser()
  }
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [passwords, setPasswords] = useState({p1: '', p2: ''})

  const [form, setForm] = useState({username:'', email: '', password: ''})
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]' 
           />
          <Text className='text-2xl mt-10 text-semiblod text-white font-psemibold'>Sign Up to Aora</Text>
          <FormField
            title='UserName'
            value={form.email}
            handleChange={(e)=>setForm({...form, username: e})}
            otherStyles='mt-5'
           />
            <FormField
            title='email'
            value={form.email}
            handleChange={(e)=>setForm({...form, email: e})}
            otherStyles='mt-'
            keyboardType='email-address'
           />
           <FormField
            title='Password'
            value={form.password}
            handleChange={(e)=>setForm({...passwords, p1: e})}
            otherStyles='mt-6'
           />
           <FormField
            title='Verify Password'
            value={form.password}
            handleChange={(e)=>setPasswords({...passwords, p2: e})}
            otherStyles='mt-6'
           />

           <CustomButton
            title='Sign Up'
            handlePress={submit}
            isLoading={isSubmiting}
            containerStyles='mt-6'
           />

           <View className='justify-center pt-4 flex-row gap-1'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Do you arleady  have an account?
              </Text>
              <Link href='/sign-in' className='text-lg font-psemibold text-secondary-100' >Sign In</Link>
           </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})