# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/focal64"
  #ubuntu-jammy
  config.vm.network "forwarded_port", guest: 8000, host: 8000

  #config.vm.network "private_network", ip: "192.168.50.4"
  
    
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "8192"
    vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ] #для запуска из под wsl
  end  

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    sudo usermod -aG docker vagrant

    #wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
    #echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
    #apt-get update
    #sudo apt-get install -y mongodb-org
    #sudo systemctl enable mongodb --now


    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
    sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
    sudo apt-get update
    # sudo apt-get -y install postgresql #можно указать версию postgresql-15
    sudo apt -get install postgresql
    sudo apt install postgresql-contrib
    sudo apt install python3-pip
    sudo systemctl start postgresql.service
    sudo systemctl enable postgresql --now

    pip3 install Flask
    pip3 install Flask-SQLAlchemy
    pip3 install eve-sqlalchemy
    pip3 install psycopg2-binary

  SHELL

end
