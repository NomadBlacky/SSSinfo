# -*- coding: utf-8 -*-
class Server < ActiveRecord::Base

  scope :full_name , lambda { |id|
    servers = where(id: id)
    server = servers.first
    svname = server.meteor ? "流星サーバー" : "サテライトサーバー"
    "#{svname}　Level:#{server.level}　#{server.name}"
  }

end
