package backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.w3c.dom.*;
import org.xml.sax.SAXException;

import javax.xml.parsers.*;
import java.io.*;

public class RefreshDBfromXML  {
	 public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
	        // TODO Auto-generated method stub

	        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/mydb","sachmo", "sachmoadi1-")) {

	            System.out.println("Java JDBC PostgreSQL Example");

	            System.out.println("Connected to PostgreSQL database!");

	            Statement statement = connection.createStatement();

	            statement.execute("drop table if exists answers");
	            statement.execute("drop table if exists questions");
	            statement.execute("drop table if exists users");


	            String createUsersTable = "create table USERS"
	                    + "("
	                    + "email varchar(50) not null unique,"
	                    + "username varchar(50) not null, "
	                    + "password varchar(50),"
	                    + "dob varchar(20),"
	                    + "mentor_role boolean,"
	                    + "user_id varchar(50) not null unique, "
	                    + "primary key(user_id)"
	                    + ")";
	            statement.execute(createUsersTable);


	            String createQuestionsTable = "create table QUESTIONS (" +
	                    "	question_id varchar(50) not null, " +
	                    "	question varchar(255) not null, " +
	                    "	user_id varchar(50) not null, " +
	                    "	viewcount numeric(10,0), " +
	                    "	answer_count numeric(10,0), " +
	                    "	votes numeric(10,0), " +
	                    "   tags varchar(200)," + 
	                    "	primary key(question_id), " +
	                    "	foreign key(user_id) references USERS(user_id)" +
	                    "	);";

	            statement.execute(createQuestionsTable);


	            String createAnswersTable = "create table ANSWERS ("
	                    + "answer_id varchar(50) not null,"
	                    + " full_answer text, "
	                    + " question_id varchar(50),"
	                    + " user_id varchar(50),"
	                    + " acceptance_status numeric(1,0),"
	                    + " primary key(answer_id),"
	                    + " foreign key(user_id) references USERS(user_id));";

	            statement.execute(createAnswersTable);


	            File inputFile = new File("/home/sachmo/Documents/NCP_SEM7/PROJECT/BugFixingApp/backend/src/sampledb.xml");

	            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
	            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
	            Document doc = dBuilder.parse(inputFile);

	            NodeList nList = doc.getElementsByTagName("user");

	            for (int temp = 0; temp < nList.getLength(); temp++) {
	                Node nNode = nList.item(temp);

	                Element eElement = (Element) nNode;

	                String Email = eElement.getElementsByTagName("Email").item(0).getTextContent();
	                String Username = eElement.getElementsByTagName("Username").item(0).getTextContent();
	                String Password = eElement.getElementsByTagName("Password").item(0).getTextContent();
	                String Date_of_birth = eElement.getElementsByTagName("Date_of_birth").item(0).getTextContent();
	                String Mentor_Role = eElement.getElementsByTagName("Mentor_Role").item(0).getTextContent();
	                String User_Id = eElement.getElementsByTagName("User_Id").item(0).getTextContent();


	                String query = String.format("insert into users values ('%s', '%s', '%s', '%s',%s,'%s') ;", Email, Username, Password, Date_of_birth, Mentor_Role, User_Id);
	                statement.execute(query);
//					System.out.println(query);

	            }

	            // statement.execute("insert into items values (" + college + ","+ state +","+ city +","+ tution +","+ hostel +","+ mess + ","+ total +  "  ); ");
	            // String query = String.format("insert into users values ('%s', '%s', '%s', %s,%s,%s,%s) ;", college,state,city,tution,hostel,mess,total);


	            nList = doc.getElementsByTagName("question");

	            for (int temp = 0; temp < nList.getLength(); temp++) {
	                Node nNode = nList.item(temp);

	                Element eElement = (Element) nNode;

	                String Ques_id = eElement.getElementsByTagName("Ques_id").item(0).getTextContent();
	                String Full_Question = eElement.getElementsByTagName("Full_Question").item(0).getTextContent();
	                String Creator_id = eElement.getElementsByTagName("Creator_id").item(0).getTextContent();
	                String Viewcount = eElement.getElementsByTagName("Viewcount").item(0).getTextContent();
	                String Answer_count = eElement.getElementsByTagName("Answer_count").item(0).getTextContent();
	                String Votes = eElement.getElementsByTagName("Votes").item(0).getTextContent();
	                String Tags = eElement.getElementsByTagName("Tags").item(0).getTextContent();


	                String query = String.format("insert into QUESTIONS values ('%s', '%s', '%s', %s,%s ,%s, '%s') ;", Ques_id, Full_Question, Creator_id, Viewcount, Answer_count,Votes, Tags);
//					System.out.println(query);
	                statement.execute(query);
	            }

	            nList = doc.getElementsByTagName("answer");

	            for (int temp = 0; temp < nList.getLength(); temp++) {
	                Node nNode = nList.item(temp);

	                Element eElement = (Element) nNode;

	                String answer_id = eElement.getElementsByTagName("answer_id").item(0).getTextContent();
	                String full_answer = eElement.getElementsByTagName("full_answer").item(0).getTextContent();
	                String ques_id = eElement.getElementsByTagName("ques_id").item(0).getTextContent();
	                String answered_person_id = eElement.getElementsByTagName("answered_person_id").item(0).getTextContent();
	                String acceptance_status = eElement.getElementsByTagName("acceptance_status").item(0).getTextContent();

	                full_answer = full_answer.replace("'", "\"");
	                String query = String.format("insert into answers values ('%s', '%s', '%s', '%s',%s) ;", answer_id, full_answer, ques_id, answered_person_id, acceptance_status);
//					System.out.println(query);
	                statement.execute(query);
	            }


	        } catch (SQLException e) {
	            e.printStackTrace();
	        }


	    }

}
