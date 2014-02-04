class ServersController < ApplicationController

  require 'csv'

  def index
    @s_servers = Server.where(meteor: false).order(:level)
    @m_servers = Server.where(meteor: true).order(:level)
  end

  def show
    @server = Server.find(params[:id])
    @sv = @server.meteor ? "m" : "s"
    @table = CSV.read("app/assets/servers/" + @sv + "#{@server.level.to_s.rjust(2,'0')}" + ".csv")
  end

end
