def svg(name)
  root = Middleman::Application.root
  file_path = "#{root}/source/images/illustrations/misc/#{name}"
  return File.read(file_path) if File.exists?(file_path)
  '(not found)'
end
