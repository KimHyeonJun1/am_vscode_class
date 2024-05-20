//const express = require('express)
import express from 'express'
const app = express()
const port = 3000
//js에선 ; 안찍어도 실행 가능
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get('/', (req, res) => {
        res.send('<h1>Hello World!</h1>')
      })
app.get('/search', (req, res) => {
        res.send('<h1>Hello Search World!</h1>')
      })
app.post('/sign_in', (req, res) => {
       const{user_id, user_pass} = req.body; // //ID,PW를 두가지 변수에 구조분할할당
      if(user_id === 'snlsuper'){//실제로는 DB에서 전체 회원중 일치하는 ID를 찾아서
        if(user_pass === 'super1234'){ //비밀번호까지 일치하는지 비교해서
          console.log('관리자 로그인!'); //맞다면, 관리자 로그인을 알리고, 클라이언트에 로그인 계정명을
          res.status(401).json({
            success: 'ok',
            message: '로그인 성공'
          });
        }
      }else{
        res.status(404).json({
          success: 'fali',
          message: '로그인 실패'
        })
      }
      return res.redirect('/');// 로그인 성공하면 메인페이지 이동
    })

app.post('/sign_up', (req, res) => {
        //DB 연결: oracle, Mysql, mognDB, Firebase, ...etc
        //const dbconn = mysql.connect('localhost:3000/users')
        //DB에 있는 데이터를 입력한 값과 비교(ID, phone : pk.uk)해서 이상이 없으면 데이터 입력처리
       // const sql ='INSERT INTO users (id, pw, name, phone) values (${user_id}, ${user_pw}, $(user_name), $(user_phone});'
       // console.log(req.body); // request의 줄임말, req(=요청)
       //dbconn.runscript(sql);
       return res.status(302).json({
        success: 'ok',
        message: '회원가입 성공'
       })
       })      
      
 app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
