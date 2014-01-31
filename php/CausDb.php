<?php

class CausDb{
    
    //Connection settings
    private $hostName = "localhost";
    private $dbUser = "root";
    private $dbPass = "root";
    private $dbName = "causdb";
    
    private $qry;
    private $con;
    private $result;
    
    
    public function __construct($inQry){
        $this->qry = $inQry;
        $this->con = mysqli_connect($this->hostName, $this->dbUser, $this->dbPass, $this->dbName);
        
    }
    
    public function __destruct() {
        if($this->con){
            mysqli_close($this->con);
        }
    }
    
    public function run(){
        
        $this->result =  mysqli_query($this->con, $this->qry);
        return mysqli_errno($this->con);
 
    }
    
    public function getResult(){
        if($result)
        {
            return $this->result;
        }
    }
    
}

?>