import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from './../../components/CustomButton';
import { Link } from 'expo-router'

const SignIn = () => {
  const submit= ()=>{}
  const [isSubmiting, setIsSubmiting] = useState(false)

  const [form, setForm] = useState({email: '', password: ''})
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]' 
           />
          <Text className='text-2xl mt-10 text-semiblod text-white font-psemibold'>Log in to Aora</Text>
          <FormField
            title='email'
            value={form.email}
            handleChange={(e)=>setForm({...form, email: e})}
            otherStyles='mt-7'
            keyboardType='email-address'
           />
           <FormField
            title='Password'
            value={form.password}
            handleChange={(e)=>setForm({...form, password: e})}
            otherStyles='mt-7'
           />

           <CustomButton
            title='Sign In'
            handlePress={submit}
            isLoading={isSubmiting}
            containerStyles='mt-7'
           />

           <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Don't have an account
              </Text>
              <Link href='/sign-up' className='text-lg font-psemibold text-secondary-100' >Sign Up</Link>
           </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})